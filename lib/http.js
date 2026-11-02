import crypto from "node:crypto";
import { query } from "./db.js";

export function send(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(status === 204 ? undefined : JSON.stringify(body));
}

export function params(req) {
  return new URL(req.url, "http://local").searchParams;
}

export async function readJson(req) {
  if (req.body !== undefined) return req.body && typeof req.body === "object" ? req.body : JSON.parse(req.body || "{}");
  let raw = "";
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 32768) throw Object.assign(new Error("too large"), { status: 413 });
  }
  try {
    return raw ? JSON.parse(raw) : {};
  } catch {
    throw Object.assign(new Error("bad json"), { status: 400 });
  }
}

export const sha256 = (s) => crypto.createHash("sha256").update(s).digest("hex");

export function clientKey(req) {
  const ip = String(req.headers["x-forwarded-for"] || "local").split(",")[0].trim();
  return sha256(ip + (process.env.RATE_SALT || "nxcsol"));
}

/** Database-backed limit, because each serverless copy has its own memory. Only a salted hash of the address is kept, for a day. */
export async function allow(key, limit, windowMin) {
  await query("DELETE FROM rate_events WHERE at < now() - interval '1 day'");
  const { rows } = await query("SELECT count(*)::int AS n FROM rate_events WHERE key = $1 AND at > now() - ($2::int * interval '1 minute')", [key, windowMin]);
  if (rows[0].n >= limit) return false;
  await query("INSERT INTO rate_events (key) VALUES ($1)", [key]);
  return true;
}

/** Wraps a handler. Errors never reach the client, and logs carry no personal details. */
export function route(methods, fn) {
  return async (req, res) => {
    if (!methods.includes(req.method)) {
      res.setHeader("Allow", methods.join(", "));
      return send(res, 405, { error: "Method not allowed." });
    }
    try {
      await fn(req, res);
    } catch (e) {
      if (res.headersSent) return res.end();
      if (e.status) return send(res, e.status, { error: e.publicMessage || "That request could not be read." });
      console.error("api error", req.url.split("?")[0], e.code || e.name);
      send(res, 500, { error: "Something went wrong. Please email hello@nxcsol.com." });
    }
  };
}
