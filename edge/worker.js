// Cloudflare Worker for nxcsol.com. Cloudflare serves files from public/ itself, and only other paths reach this code.
// It covers the agent, briefs (email and the team bell) and new-visitor alerts. The heatmap and dashboard need a database, which runs on Vercel.
import KNOWLEDGE from "../lib/knowledge.txt";
import { BOT_UA, CHAT_REFUSED, GEMINI_MODEL, LEAD_FAILED, LEAD_INVALID, LEAD_LIMIT, LEAD_OFF, alertFor, chatFailure, chatSystem, cleanMessages, emailBrief, parseLead, ring, streamGemini } from "../lib/shared.js";

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
  if (!emailKey(env) && !env.NTFY_TOPIC) return json(503, { error: LEAD_OFF });
  if (!(await allow(request, env, "lead", 5, 60))) return json(429, { error: LEAD_LIMIT });
  const [sent, rang] = await Promise.all([
    emailKey(env) ? emailBrief(brief, { key: emailKey(env), to: env.LEAD_EMAIL || "hello@nxcsol.com", from: env.EMAIL_FROM }) : false,
    ring(env.NTFY_TOPIC, alertFor("lead", brief)),
  ]);
  return sent || rang ? json(200, { ok: true }) : json(502, { error: LEAD_FAILED });
}

// a new visitor or a voice call: rings the team's bell. Nothing is stored, and the visitor's address is never sent.
async function notify(request, env, ctx) {
  if (!env.NTFY_TOPIC) return new Response(null, { status: 204 });
  const body = await readBody(request), type = body && body.type;
  if (!["visit", "voice"].includes(type)) return json(400, {});
  const ua = request.headers.get("user-agent") || "";
  if (BOT_UA.test(ua)) return new Response(null, { status: 204 });
  if (!(await allow(request, env, "notify:" + type, type === "visit" ? 1 : 4, type === "visit" ? 30 : 60))) return new Response(null, { status: 204 });
  const cf = request.cf || {};
  ctx.waitUntil(ring(env.NTFY_TOPIC, alertFor(type, { path: body.path, ref: body.ref, ua, city: cf.city, region: cf.region, country: cf.country })));
  return new Response(null, { status: 204 });
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

const health = (env) => json(200, { ok: true, agent: Boolean(env.GEMINI_API_KEY), provider: env.GEMINI_API_KEY ? "gemini" : null, data: false, lead: Boolean(emailKey(env) || env.NTFY_TOPIC), alerts: Boolean(env.NTFY_TOPIC) });

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url), method = request.method;
    try {
      if (pathname === "/api/health" && method === "GET") return health(env);
      if (pathname === "/api/lead" && method === "POST") return await lead(request, env);
      if (pathname === "/api/chat" && method === "POST") return await chat(request, env, ctx);
      if (pathname === "/api/notify" && method === "POST") return await notify(request, env, ctx);
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
