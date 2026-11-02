import crypto from "node:crypto";
import { allow, clientKey, sha256 } from "./http.js";

const fail = (status, publicMessage) => Object.assign(new Error("auth"), { status, publicMessage });

export async function requireAdmin(req) {
  const secret = process.env.ADMIN_TOKEN || "";
  if (secret.length < 24) throw fail(503, "Admin access is not set up yet.");
  const given = String(req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  if (crypto.timingSafeEqual(Buffer.from(sha256(given), "hex"), Buffer.from(sha256(secret), "hex"))) return;
  if (!(await allow("login:" + clientKey(req), 10, 15))) throw fail(429, "Too many attempts. Try again in 15 minutes.");
  throw fail(401, "That password is not correct.");
}
