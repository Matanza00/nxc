-- NXCSOL live data. Safe to run more than once.
CREATE TABLE IF NOT EXISTS clicks (id bigserial PRIMARY KEY, path text NOT NULL, device text NOT NULL, x real NOT NULL, y integer NOT NULL, at timestamptz NOT NULL DEFAULT now());
CREATE INDEX IF NOT EXISTS clicks_page ON clicks (path, device, at DESC);
CREATE TABLE IF NOT EXISTS views (id bigserial PRIMARY KEY, path text NOT NULL, device text NOT NULL, depth integer NOT NULL, at timestamptz NOT NULL DEFAULT now());
CREATE INDEX IF NOT EXISTS views_at ON views (at DESC);
CREATE TABLE IF NOT EXISTS leads (id bigserial PRIMARY KEY, name text NOT NULL, company text NOT NULL DEFAULT '', email text NOT NULL, brief text NOT NULL DEFAULT '', at timestamptz NOT NULL DEFAULT now());
CREATE TABLE IF NOT EXISTS chats (id bigserial PRIMARY KEY, session text NOT NULL, question text NOT NULL, answer text NOT NULL, at timestamptz NOT NULL DEFAULT now());
CREATE TABLE IF NOT EXISTS rate_events (key text NOT NULL, at timestamptz NOT NULL DEFAULT now());
CREATE INDEX IF NOT EXISTS rate_events_key ON rate_events (key, at);
