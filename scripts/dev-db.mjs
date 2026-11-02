// In-memory Postgres for local development. Never used on Vercel.
import fs from "node:fs";
import { PGlite } from "@electric-sql/pglite";
import { setDb } from "../lib/db.js";

export async function startDevDb() {
  const db = new PGlite();
  await db.exec(fs.readFileSync(new URL("../db/schema.sql", import.meta.url), "utf8"));
  setDb((text, params) => db.query(text, params));
}
