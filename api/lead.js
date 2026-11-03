// The project planner. Stores the brief when there is a database and emails the team when email is set up. Either one is enough.
import { query, hasDb } from "../lib/db.js";
import { allow, canEmail, clientKey, readJson, route, send } from "../lib/http.js";

const str = (v, n) => String(v ?? "").trim().slice(0, n);

export default route(["POST"], async (req, res) => {
  const b = await readJson(req);
  if (b.website) return send(res, 200, { ok: true });   // the hidden field only bots fill in
  const name = str(b.name, 120), email = str(b.email, 160), brief = str(b.brief, 4000);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return send(res, 400, { error: "Add your name and a valid email." });
  if (!hasDb() && !canEmail()) return send(res, 503, { error: "Sending is not set up yet. Please use WhatsApp or email." });
  if (!(await allow("lead:" + clientKey(req), 5, 60))) return send(res, 429, { error: "Too many briefs from here. Please email hello@nxcsol.com." });
  const company = str(b.company, 160);
  let stored = false, emailed = false;
  if (hasDb()) {
    try { await query("INSERT INTO leads (name, company, email, brief) VALUES ($1, $2, $3, $4)", [name, company, email, brief]); stored = true; }
    catch (e) { console.error("lead store failed", e.code || e.name); }
  }
  if (canEmail()) {
    try {
      const r = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: process.env.EMAIL_FROM || "NXCSOL <hello@nxcsol.com>", to: process.env.LEAD_EMAIL, reply_to: email, subject: `New brief from ${name.replace(/\s+/g, " ")}`, text: `Name: ${name}\nCompany: ${company || "-"}\nEmail: ${email}\n\n${brief}` }) });
      emailed = r.ok;
      if (!r.ok) console.error("lead email failed", r.status);
    } catch (e) { console.error("lead email failed", e.name); }
  }
  // tell the visitor when nothing kept their brief, so it is never lost in silence
  if (!stored && !emailed) return send(res, 502, { error: "The brief was not sent. Please use WhatsApp or email hello@nxcsol.com." });
  send(res, 200, { ok: true });
});
