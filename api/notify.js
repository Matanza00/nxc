// New-visitor and voice-call alerts for the local server and Vercel: rings the team's bell through ntfy.sh (NTFY_TOPIC).
import { allow, clientKey, readJson, route, send } from "../lib/http.js";
import { BOT_UA, alertFor, ring } from "../lib/shared.js";

export default route(["POST"], async (req, res) => {
  const topic = process.env.NTFY_TOPIC;
  if (!topic) { res.statusCode = 204; return res.end(); }
  const body = await readJson(req), type = body && body.type;
  if (!["visit", "voice"].includes(type)) return send(res, 400, {});
  const ua = req.headers["user-agent"] || "";
  if (!BOT_UA.test(ua) && (await allow("notify:" + type + ":" + clientKey(req), type === "visit" ? 1 : 4, type === "visit" ? 30 : 60)))
    await ring(topic, alertFor(type, { path: body.path, ref: body.ref, ua, country: req.headers["x-vercel-ip-country"], city: decodeURIComponent(req.headers["x-vercel-ip-city"] || "") }));
  res.statusCode = 204; res.end();
});
