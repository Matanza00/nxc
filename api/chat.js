// The site's agent: answers from lib/knowledge.txt, streams plain text back to the chat panel.
import fs from "node:fs";
import crypto from "node:crypto";
import Anthropic from "@anthropic-ai/sdk";
import { query, hasDb } from "../lib/db.js";
import { allow, clientKey, readJson, route, send } from "../lib/http.js";
import { CHAT_REFUSED, GEMINI_MODEL, chatFailure, chatSystem, cleanMessages, streamGemini } from "../lib/shared.js";

const GEMINI = Boolean(process.env.GEMINI_API_KEY);
const MODEL = process.env.CHAT_MODEL || (GEMINI ? GEMINI_MODEL : "claude-opus-5-5");
const SYSTEM = chatSystem(fs.readFileSync(new URL("../lib/knowledge.txt", import.meta.url), "utf8"));

export default route(["POST"], async (req, res) => {
  if (!GEMINI && !process.env.ANTHROPIC_API_KEY) return send(res, 503, { error: "The agent is not set up yet." });
  const body = await readJson(req), messages = cleanMessages(body.messages);
  if (!messages) return send(res, 400, { error: "Send a question." });
  if (!(await allow("chat:" + clientKey(req), 30, 60))) return send(res, 429, { error: "That is a lot of questions for one hour. Please message the team on the contact page." });

  const session = /^[a-f0-9-]{36}$/.test(body.session || "") ? body.session : crypto.randomUUID();
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Accel-Buffering", "no");

  let answer = "";
  try {
    let refused = false;
    if (GEMINI) {
      for await (const text of streamGemini(messages, { key: process.env.GEMINI_API_KEY, model: MODEL, system: SYSTEM })) { answer += text; res.write(text); }
      refused = !answer;   // a blocked prompt or answer arrives with no text
    } else {
      const stream = new Anthropic().beta.messages.stream({
        model: MODEL,
        max_tokens: 2000,
        output_config: { effort: "low" },
        system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
        messages,
        ...(MODEL.startsWith("claude-opus-5") ? { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" } : {}),
      });
      for await (const event of stream) {
        if (event.type === "content_block_delta" && event.delta.type === "text_delta") { answer += event.delta.text; res.write(event.delta.text); }
      }
      refused = (await stream.finalMessage()).stop_reason === "refusal" && !answer;
    }
    if (refused) { answer = CHAT_REFUSED; res.write(answer); }
  } catch (e) {
    console.error("chat error", e.status || e.name);
    if (!answer) res.write(chatFailure(e));
  }
  res.end();
  if (hasDb() && answer) await query("INSERT INTO chats (session, question, answer) VALUES ($1, $2, $3)", [session, messages.at(-1).content, answer.slice(0, 4000)]).catch(() => {});
});
