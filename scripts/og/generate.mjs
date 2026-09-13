// Link-preview images (Open Graph) for WhatsApp, Messenger, Viber, Facebook, LinkedIn, X…
//
//     node scripts/og/generate.mjs
//
// Renders a 1200×630 PNG for the homepage and for every service with headless
// Google Chrome, using the Bulgarian copy from app/locales/bg/translation.json,
// and writes them to public/og/<name>.png. Re-run after changing a service title
// or description. Chat apps cache previews, so a changed image may take a while
// to show for links that were already shared.
import { spawn } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT = join(ROOT, 'public', 'og');
const LOGO = pathToFileURL(join(ROOT, 'public', 'assets', 'logo.png')).href;
const WIDTH = 1200;
const HEIGHT = 630;

const bg = JSON.parse(readFileSync(join(ROOT, 'app', 'locales', 'bg', 'translation.json'), 'utf8'));
const serviceGroup = Object.fromEntries(
    [...readFileSync(join(ROOT, 'app', 'config', 'services.ts'), 'utf8').matchAll(/id: '([^']+)', group: '([^']+)'/g)]
        .map(([, id, group]) => [id, group]),
);

const pages = [
    { name: 'home', eyebrow: bg.hero.badge, title: bg.hero.title, text: bg.hero.description },
    ...bg.services.items.map((item) => ({
        name: item.id,
        eyebrow: bg.services.groups[serviceGroup[item.id]]?.title ?? bg.services.title,
        title: item.title,
        text: item.desc,
    })),
];

const escape = (value) => value.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

const html = ({ eyebrow, title, text }) => `<!doctype html>
<html lang="bg"><head><meta charset="utf-8"><style>
  * { margin: 0; box-sizing: border-box; }
  html, body { width: ${WIDTH}px; height: ${HEIGHT}px; overflow: hidden; }
  body {
    font-family: 'Ubuntu', 'Noto Sans', 'DejaVu Sans', sans-serif;
    background: #18181b; color: #fafafa;
    display: flex; position: relative;
  }
  .content { flex: 1; padding: 64px 0 64px 72px; display: flex; flex-direction: column; }
  .brand { display: flex; align-items: center; gap: 16px; font-size: 30px; font-weight: 700; }
  .brand img { width: 56px; height: 56px; }
  .main { margin-top: auto; margin-bottom: auto; padding-right: 24px; }
  .eyebrow { color: #f9a427; font-size: 24px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; }
  h1 { margin-top: 18px; font-size: 60px; line-height: 1.1; font-weight: 700; letter-spacing: -1px; }
  p { margin-top: 22px; font-size: 28px; line-height: 1.4; color: #d4d4d8; max-width: 760px; }
  .url { font-size: 24px; color: #a1a1aa; }
  .mark { width: 330px; display: flex; align-items: center; justify-content: flex-start; }
  .mark img { width: 300px; height: 300px; }
  .bar { position: absolute; left: 0; right: 0; bottom: 0; height: 10px; background: #f9a427; }
</style></head><body>
  <div class="content">
    <div class="brand"><img src="${LOGO}" alt="">OMNI Tech Solutions</div>
    <div class="main">
      <div class="eyebrow">${escape(eyebrow)}</div>
      <h1>${escape(title)}</h1>
      <p>${escape(text)}</p>
    </div>
    <div class="url">tech.omni-solutions.co</div>
  </div>
  <div class="mark"><img src="${LOGO}" alt=""></div>
  <div class="bar"></div>
</body></html>`;

// --- Chrome DevTools Protocol, no extra dependencies ---------------------------------
const work = mkdtempSync(join(tmpdir(), 'omni-og-'));
const port = 9400 + Math.floor(Math.random() * 400);
const chrome = spawn('google-chrome', [
    '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars', '--allow-file-access-from-files',
    `--remote-debugging-port=${port}`, `--user-data-dir=${join(work, 'profile')}`, 'about:blank',
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let target;
for (let i = 0; i < 50 && !target; i++) {
    try {
        target = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === 'page');
    } catch { await sleep(200); }
}
if (!target) { chrome.kill(); throw new Error('Could not start google-chrome'); }

const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener('open', r, { once: true }));
let id = 0;
const pending = new Map();
ws.addEventListener('message', (e) => {
    const msg = JSON.parse(e.data);
    if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg.result); pending.delete(msg.id); }
});
const send = (method, params = {}) => new Promise((done) => {
    const n = ++id; pending.set(n, done); ws.send(JSON.stringify({ id: n, method, params }));
});

await send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: HEIGHT, deviceScaleFactor: 1, mobile: false });
await send('Page.enable');
mkdirSync(OUT, { recursive: true });

for (const page of pages) {
    const file = join(work, `${page.name}.html`);
    writeFileSync(file, html(page));
    await send('Page.navigate', { url: pathToFileURL(file).href });
    await sleep(900);
    const shot = await send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT, scale: 1 } });
    const out = join(OUT, `${page.name}.png`);
    writeFileSync(out, Buffer.from(shot.data, 'base64'));
    console.log(`public/og/${page.name}.png  ${Math.round(Buffer.byteLength(shot.data, 'base64') / 1024)} KB`);
}

ws.close();
// Wait for Chrome to exit before removing its profile — it keeps writing until it does
await new Promise((done) => { chrome.once('exit', done); chrome.kill(); });
rmSync(work, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
process.exit(0);
