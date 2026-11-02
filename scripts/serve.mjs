// Local server: the site from public/ and the /api functions. `npm run dev`.
// Without DATABASE_URL it uses an in-memory database, so data resets on restart.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUB = path.join(ROOT, "public"), PORT = Number(process.env.PORT) || 3000;
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".woff2": "font/woff2", ".json": "application/json", ".webmanifest": "application/manifest+json", ".mp4": "video/mp4" };

process.env.ADMIN_TOKEN ||= "local-dev-password-for-testing-only";
if (!process.env.DATABASE_URL) {
  const { startDevDb } = await import("./dev-db.mjs");
  await startDevDb();
  console.log("Using an in-memory database. Data is lost on restart.");
}

const server = http.createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split("?")[0]);
  if (url.startsWith("/api/")) {
    const name = url.replace(/^\/+|\/+$/g, "").replace(/[^a-z/-]/g, ""), file = path.join(ROOT, name + ".js");
    if (!fs.existsSync(file)) { res.statusCode = 404; return res.end("{}"); }
    return (await import(pathToFileURL(file).href)).default(req, res);
  }
  let f = path.join(PUB, url);
  if (f.startsWith(PUB) && fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, "index.html");
  const found = f.startsWith(PUB) && fs.existsSync(f) && fs.statSync(f).isFile(), file = found ? f : path.join(PUB, "404.html");
  const size = fs.statSync(file).size, range = req.headers.range;
  if (range && /\.mp4$/.test(file)) {
    const [a, b] = range.replace("bytes=", "").split("-"), st = +a, en = b ? +b : size - 1;
    res.writeHead(206, { "Content-Type": "video/mp4", "Accept-Ranges": "bytes", "Content-Range": `bytes ${st}-${en}/${size}`, "Content-Length": en - st + 1 });
    return fs.createReadStream(file, { start: st, end: en }).pipe(res);
  }
  res.writeHead(found ? 200 : 404, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});

// Other dev tools often hold port 3000, so move to the next free port unless PORT asks for a specific one.
let port = PORT;
server.on("error", (e) => {
  if (e.code !== "EADDRINUSE") throw e;
  if (process.env.PORT || port >= PORT + 20) { console.error(`Port ${port} is in use. Close what is using it, or set PORT to a free one.`); process.exit(1); }
  console.log(`Port ${port} is in use, trying ${port + 1}.`);
  server.listen(++port);
});
server.on("listening", () => console.log(`NXCSOL at http://localhost:${port}  Dashboard: /admin/  Password: ${process.env.ADMIN_TOKEN.startsWith("local-") ? process.env.ADMIN_TOKEN : "(from ADMIN_TOKEN)"}`));
server.listen(port);
