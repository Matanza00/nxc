// First-party heatmap: click positions and scroll depth. No cookies, no IP address, no text from the page.
import fs from "node:fs";
import { query, hasDb } from "../lib/db.js";
import { allow, clientKey, readJson, route, send } from "../lib/http.js";

const PATHS = new Set(JSON.parse(fs.readFileSync(new URL("../lib/paths.json", import.meta.url), "utf8")));
const num = (v, a, b) => (Number.isFinite(v) && v >= a && v <= b ? v : null);

export default route(["POST"], async (req, res) => {
  if (!hasDb()) return send(res, 204, {});
  const b = await readJson(req);
  if (!PATHS.has(b.p) || !["desk", "phone"].includes(b.d)) return send(res, 400, { error: "Unknown page." });
  if (!(await allow("track:" + clientKey(req), 120, 10))) return send(res, 429, {});
  const clicks = (Array.isArray(b.c) ? b.c : []).slice(0, 60).map(([x, y]) => [num(x, 0, 1), num(y, 0, 200000)]).filter(([x, y]) => x !== null && y !== null);
  for (const [x, y] of clicks) await query("INSERT INTO clicks (path, device, x, y) VALUES ($1, $2, $3, $4)", [b.p, b.d, x, Math.round(y)]);
  const depth = num(b.s, 0, 100);
  if (depth !== null) await query("INSERT INTO views (path, device, depth) VALUES ($1, $2, $3)", [b.p, b.d, Math.round(depth)]);
  send(res, 200, { ok: true });
});
