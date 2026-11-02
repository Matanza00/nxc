// Renders the NXCSOL logo stills (PNG) and the animation frames from logo-anim.html with headless Chrome.
// Usage: node render.mjs <puppeteer-core folder> ; frames go to ../frames, stills to ../
import { createRequire } from "module";
import path from "path";
import fs from "fs";
import { fileURLToPath, pathToFileURL } from "url";
const here = path.dirname(fileURLToPath(import.meta.url)), out = path.join(here, "..");
const require = createRequire(path.join(process.argv[2], "package.json"));
const puppeteer = require("puppeteer-core");
const page0 = pathToFileURL(path.join(here, "logo-anim.html")).href;
const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new" });
const page = await browser.newPage();

// stills: the finished logo, cropped to the mark with a margin
async function still(name, query, dpr, bg) {
  await page.setViewport({ width: 1400, height: 600, deviceScaleFactor: dpr });
  await page.goto(page0 + "?still&capture&fs=200" + query, { waitUntil: "load" }); await page.evaluate(() => window.ready);
  const r = await page.evaluate(() => { const b = document.querySelector("#logo").getBoundingClientRect(), bar = document.querySelector(".bar").getBoundingClientRect(); return { x: b.left, y: Math.min(b.top, bar.top), w: b.width, h: Math.max(b.bottom, bar.bottom) - Math.min(b.top, bar.top) }; });
  const m = bg ? 0.22 : 0.06;   // a framed version gets breathing room; the transparent cut sits tight
  await page.screenshot({ path: path.join(out, name), omitBackground: !bg, clip: { x: r.x - r.w * m, y: r.y - r.h * m * 2.2, width: r.w * (1 + 2 * m), height: r.h * (1 + 4.4 * m) } });
}
await still("nxcsol-logo-dark.png", "", 4, true);
await still("nxcsol-logo-transparent.png", "&transparent", 4, false);
await still("nxcsol-logo-for-light-bg.png", "&transparent&light", 4, false);

// animation frames
const fps = 25, W = 1000, H = 500;
fs.mkdirSync(path.join(out, "frames"), { recursive: true });
await page.setViewport({ width: W, height: H, deviceScaleFactor: 2 });
await page.goto(page0 + "?capture&fs=150", { waitUntil: "load" }); await page.evaluate(() => window.ready);
const dur = await page.evaluate(() => window.DUR), n = Math.round(dur * fps);
for (let i = 0; i < n; i++) {
  await page.evaluate((t) => window.render(t), i / fps);
  await page.screenshot({ path: path.join(out, "frames", String(i).padStart(4, "0") + ".png") });
}
console.log(`stills: 3, frames: ${n} at ${fps} fps (${W * 2}x${H * 2})`);
await browser.close();
