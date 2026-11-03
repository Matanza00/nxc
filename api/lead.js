// The project planner. Stores the brief when there is a database and emails the team when email is set up. Either one is enough.
import { query, hasDb } from "../lib/db.js";
import { allow, canEmail, clientKey, readJson, route, send } from "../lib/http.js";
import { LEAD_FAILED, LEAD_INVALID, LEAD_LIMIT, LEAD_OFF, emailBrief, parseLead } from "../lib/shared.js";

export default route(["POST"], async (req, res) => {
  const { lead, isBot, valid } = parseLead(await readJson(req));
  if (isBot) return send(res, 200, { ok: true });   // the hidden field only bots fill in
  if (!valid) return send(res, 400, { error: LEAD_INVALID });
  if (!hasDb() && !canEmail()) return send(res, 503, { error: LEAD_OFF });
  if (!(await allow("lead:" + clientKey(req), 5, 60))) return send(res, 429, { error: LEAD_LIMIT });
  let stored = false, emailed = false;
  if (hasDb()) {
    try { await query("INSERT INTO leads (name, company, email, brief) VALUES ($1, $2, $3, $4)", [lead.name, lead.company, lead.email, lead.brief]); stored = true; }
    catch (e) { console.error("lead store failed", e.code || e.name); }
  }
  if (canEmail()) emailed = await emailBrief(lead, { key: process.env.RESEND_API_KEY, to: process.env.LEAD_EMAIL, from: process.env.EMAIL_FROM });
  // tell the visitor when nothing kept their brief, so it is never lost in silence
  if (!stored && !emailed) return send(res, 502, { error: LEAD_FAILED });
  send(res, 200, { ok: true });
});
