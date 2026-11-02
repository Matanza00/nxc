// Renders the LinkedIn logo, icon, company cover and personal banner from linkedin.html at 2x.
// Usage: node render-linkedin.mjs <folder containing node_modules/puppeteer-core>
import { createRequire } from "module";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
const here = path.dirname(fileURLToPath(import.meta.url)), out = path.join(here, "..", "linkedin");
const puppeteer = createRequire(path.join(process.argv[2], "package.json"))("puppeteer-core");
const face = (fam, w, file) => `@font-face{font-family:"${fam}";font-weight:${w};src:url(data:font/woff2;base64,${fs.readFileSync(path.join(here, "fonts", file)).toString("base64")}) format("woff2");}`;
const FONTS = [face("Saira Semi Condensed", 700, "saira-semi-condensed-700.woff2"), face("Geist", 400, "geist-400.woff2"), face("Geist", 500, "geist-500.woff2"),
  face("Geist", 600, "geist-600.woff2"), face("Geist Mono", 500, "geist-mono-500.woff2"), face("Geist Mono", 400, "geist-mono-500.woff2")].join("\n");
const tpl = fs.readFileSync(path.join(here, "linkedin.html"), "utf8").replace("/*FONTS*/", FONTS);
fs.mkdirSync(out, { recursive: true });
const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new" });
const JOBS = [["logo", 400, 400, "nxcsol-linkedin-logo.png"], ["icon", 400, 400, "nxcsol-linkedin-logo-icon.png"],
  ["cover", 1128, 191, "nxcsol-linkedin-company-cover.png"], ["banner", 1584, 396, "nxcsol-linkedin-profile-banner.png"]];
for (const [k, w, h, name] of JOBS) {
  const page = await browser.newPage();   // a fresh page each time: the template's script declares its constants once
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 2 });
  await page.setContent(tpl.replace("<script>", `<script>window.K=${JSON.stringify(k)};`), { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(out, name), clip: { x: 0, y: 0, width: w, height: h } });
  console.log(name, `${w * 2}x${h * 2}`);
  await page.close();
}
await browser.close();
