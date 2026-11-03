// Tells the page which live features this deployment has.
import { hasDb } from "../lib/db.js";
import { canEmail, route, send } from "../lib/http.js";

export default route(["GET"], async (req, res) => send(res, 200, { ok: true, agent: Boolean(process.env.GEMINI_API_KEY || process.env.ANTHROPIC_API_KEY), provider: process.env.GEMINI_API_KEY ? "gemini" : process.env.ANTHROPIC_API_KEY ? "anthropic" : null, data: hasDb(), lead: hasDb() || canEmail() }));
