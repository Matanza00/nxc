// Creates the tables. Run once: DATABASE_URL=... npm run db:setup
import fs from "node:fs";
import { query } from "../lib/db.js";

if (!process.env.DATABASE_URL) {
  console.error("Set DATABASE_URL first. Use the direct (non-pooled) connection string for this step.");
  process.exit(1);
}
await query(fs.readFileSync(new URL("../db/schema.sql", import.meta.url), "utf8"));
console.log("Tables are ready.");
process.exit(0);
