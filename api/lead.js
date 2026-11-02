// The project planner. Stores the brief and emails the team when email is set up.
import { query, hasDb } from "../lib/db.js";
import { allow, clientKey, readJson, route, send } from "../lib/http.js";

const str = (v, n) => String(v ?? "").trim().slice(0, n);

export default route(["POST"], async (req, res) => {
  const b = await readJson(req);
  if (b.website) return send(res, 200, { ok: true });   // the hidden field only bots fill in
  const name = str(b.name, 120), email = str(b.email, 160), brief = str(b.brief, 4000);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return send(res, 400, { error: "Add your name and a valid email." });
  if (!hasDb()) return send(res, 503, { error: "Sending is not set up yet. Please use WhatsApp or email." });
  if (!(await allow("lead:" + clientKey(req), 5, 60))) return send(res, 429, { error: "Too many briefs from here. Please email hello@nxcsol.com." });
  await query("INSERT INTO leads (name, company, email, brief) VALUES ($1, $2, $3, $4)", [name, str(b.company, 160), email, brief]);
  if (process.env.RESEND_API_KEY && process.env.LEAD_EMAIL) {
    await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.EMAIL_FROM || "NXCSOL <hello@nxcsol.com>", to: process.env.LEAD_EMAIL, reply_to: email, subject: `New brief from ${name}`, text: brief }) }).catch(() => {});
  }
  send(res, 200, { ok: true });
});
