// Postgres access. Vercel functions run many short-lived copies, so each keeps one connection.
// Use the pooled connection string from your database provider as DATABASE_URL.
let override = null;
let pool = null;

/** Lets local dev use an in-process database. */
export function setDb(fn) {
  override = fn;
}

export function hasDb() {
  return Boolean(override || process.env.DATABASE_URL);
}

export async function query(text, params = []) {
  if (override) return override(text, params);
  if (!pool) {
    const { default: pg } = await import("pg");
    pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, max: 1, idleTimeoutMillis: 10000 });
  }
  return pool.query(text, params);
}
