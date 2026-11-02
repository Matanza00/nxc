// Owner dashboard data. Everything here needs the ADMIN_TOKEN.
import { query } from "../lib/db.js";
import { params, route, send } from "../lib/http.js";
import { requireAdmin } from "../lib/auth.js";

export default route(["GET"], async (req, res) => {
  await requireAdmin(req);
  const q = params(req), view = q.get("view") || "summary";
  if (view === "heat") {
    const { rows } = await query("SELECT x, y FROM clicks WHERE path = $1 AND device = $2 ORDER BY at DESC LIMIT 5000", [q.get("path") || "/", q.get("device") === "phone" ? "phone" : "desk"]);
    return send(res, 200, { points: rows });
  }
  const [pages, leads, chats, totals] = await Promise.all([
    query(`SELECT v.path, v.views, v.depth, coalesce(c.clicks, 0)::int AS clicks FROM
      (SELECT path, count(*)::int AS views, round(avg(depth))::int AS depth FROM views WHERE at > now() - interval '30 days' GROUP BY path) v
      LEFT JOIN (SELECT path, count(*) AS clicks FROM clicks WHERE at > now() - interval '30 days' GROUP BY path) c USING (path) ORDER BY v.views DESC LIMIT 40`),
    query("SELECT name, company, email, brief, at FROM leads ORDER BY at DESC LIMIT 50"),
    query("SELECT question, answer, at FROM chats ORDER BY at DESC LIMIT 50"),
    query(`SELECT (SELECT count(*) FROM views WHERE at > now() - interval '30 days')::int AS views, (SELECT count(*) FROM clicks WHERE at > now() - interval '30 days')::int AS clicks,
      (SELECT count(*) FROM leads)::int AS leads, (SELECT count(DISTINCT session) FROM chats)::int AS chats`),
  ]);
  send(res, 200, { totals: totals.rows[0], pages: pages.rows, leads: leads.rows, chats: chats.rows });
});
