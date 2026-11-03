// Cloudflare Worker for nxcsol.com. Cloudflare serves files from public/ itself, and only other paths reach this code.
// It covers the agent and email-only briefs. The heatmap and dashboard need a database, which runs on Vercel.
import KNOWLEDGE from "../lib/knowledge.txt";
import { CHAT_REFUSED, GEMINI_MODEL, LEAD_FAILED, LEAD_INVALID, LEAD_LIMIT, LEAD_OFF, chatFailure, chatSystem, cleanMessages, emailBrief, parseLead, streamGemini } from "../lib/shared.js";

const SYSTEM = chatSystem(KNOWLEDGE);
const json = (status, body) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" } });

const readBody = async (request) => {
  const raw = await request.text();
  if (raw.length > 32768) return null;
  try { return raw ? JSON.parse(raw) : {}; } catch { return null; }
};

// each Worker copy counts for itself: a rough limit, and only a salted hash of the address is held, in memory
const hits = new Map();
async function allow(request, env, scope, limit, minutes) {
  const data = new TextEncoder().encode((request.headers.get("cf-connecting-ip") || "local") + (env.RATE_SALT || "nxcsol"));
  const hash = [...new Uint8Array(await crypto.subtle.digest("SHA-256", data))].map((b) => b.toString(16).padStart(2, "0")).join("");
  const key = scope + ":" + hash, now = Date.now(), recent = (hits.get(key) || []).filter((t) => now - t < minutes * 60000);
  if (recent.length >= limit) return false;
  if (hits.size > 5000) hits.clear();
  hits.set(key, [...recent, now]);
  return true;
}

const emailKey = (env) => env.RESEND_API_KEY || env.RESEND_API;

async function lead(request, env) {
  const body = await readBody(request);
  if (!body) return json(400, { error: "That request could not be read." });
  const { lead: brief, isBot, valid } = parseLead(body);
  if (isBot) return json(200, { ok: true });
  if (!valid) return json(400, { error: LEAD_INVALID });
  if (!emailKey(env)) return json(503, { error: LEAD_OFF });
  if (!(await allow(request, env, "lead", 5, 60))) return json(429, { error: LEAD_LIMIT });
  const sent = await emailBrief(brief, { key: emailKey(env), to: env.LEAD_EMAIL || "hello@nxcsol.com", from: env.EMAIL_FROM });
  return sent ? json(200, { ok: true }) : json(502, { error: LEAD_FAILED });
}

async function chat(request, env, ctx) {
  if (!env.GEMINI_API_KEY) return json(503, { error: "The agent is not set up yet." });
  const body = await readBody(request), messages = body && cleanMessages(body.messages);
  if (!messages) return json(400, { error: "Send a question." });
  if (!(await allow(request, env, "chat", 30, 60))) return json(429, { error: "That is a lot of questions for one hour. Please message the team on the contact page." });

  const { readable, writable } = new TransformStream(), writer = writable.getWriter(), encoder = new TextEncoder();
  ctx.waitUntil((async () => {
    let answer = "";
    try {
      for await (const text of streamGemini(messages, { key: env.GEMINI_API_KEY, model: env.CHAT_MODEL || GEMINI_MODEL, system: SYSTEM })) { answer += text; await writer.write(encoder.encode(text)); }
      if (!answer) await writer.write(encoder.encode(CHAT_REFUSED));   // a blocked prompt or answer arrives with no text
    } catch (e) {
      console.error("chat error", e.status || e.name);
      if (!answer) await writer.write(encoder.encode(chatFailure(e)));
    }
    await writer.close();
  })());
  return new Response(readable, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });
}

const health = (env) => json(200, { ok: true, agent: Boolean(env.GEMINI_API_KEY), provider: env.GEMINI_API_KEY ? "gemini" : null, data: false, lead: Boolean(emailKey(env)) });

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url), method = request.method;
    try {
      if (pathname === "/api/health" && method === "GET") return health(env);
      if (pathname === "/api/lead" && method === "POST") return await lead(request, env);
      if (pathname === "/api/chat" && method === "POST") return await chat(request, env, ctx);
    } catch (e) {
      console.error("api error", pathname, e.name);
      return json(500, { error: "Something went wrong. Please email hello@nxcsol.com." });
    }
    if (pathname.startsWith("/api/")) return json(404, {});
    // Cloudflare serves real files before this code runs, so anything else that gets here does not exist
    const page = await env.ASSETS.fetch(new URL("/404", request.url));
    return new Response(page.body, { status: 404, headers: page.headers });
  },
};
