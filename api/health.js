// Tells the page which live features this deployment has.
import { hasDb } from "../lib/db.js";
import { route, send } from "../lib/http.js";

export default route(["GET"], async (req, res) => send(res, 200, { ok: true, agent: Boolean(process.env.ANTHROPIC_API_KEY), data: hasDb() }));
