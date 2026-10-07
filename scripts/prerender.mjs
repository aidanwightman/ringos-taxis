// Writes a real HTML file for every page after `vite build`, so search engines and
// link previews (Facebook, WhatsApp) see each page's own title, description and content.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render, paths } = await import(pathToFileURL(path.join(root, "dist-server/entry-server.js")).href);

const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const escapeText = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function setAttr(html, selector, attr, value) {
  // selector is the literal start of the tag, e.g. '<meta name="description"'
  const start = html.indexOf(selector);
  if (start === -1) throw new Error(`Template is missing ${selector}`);
  const end = html.indexOf(">", start);
  const tag = html.slice(start, end);
  const updated = tag.replace(new RegExp(`${attr}="[^"]*"`), `${attr}="${escapeAttr(value)}"`);
  return html.slice(0, start) + updated + html.slice(end);
}

function buildPage(url, { notFound = false } = {}) {
  const { html, head } = render(url);
  let page = template;

  if (head.title) {
    page = page.replace(/<title>[^<]*<\/title>/, `<title>${escapeText(head.title)}</title>`);
    page = setAttr(page, '<meta property="og:title"', "content", head.title);
    page = setAttr(page, '<meta name="twitter:title"', "content", head.title);
  }
  if (head.description) {
    page = setAttr(page, '<meta name="description"', "content", head.description);
    page = setAttr(page, '<meta property="og:description"', "content", head.description);
    page = setAttr(page, '<meta name="twitter:description"', "content", head.description);
  }
  if (head.canonical) {
    page = setAttr(page, '<link rel="canonical"', "href", head.canonical);
    page = setAttr(page, '<meta property="og:url"', "content", head.canonical);
  }
  if (notFound) {
    page = setAttr(page, '<meta name="robots"', "content", "noindex, follow");
    page = page.replace(/\s*<link rel="canonical"[^>]*>/, "");
  }

  const jsonLd = head.jsonLd
    .map(({ id, data }) => `  <script type="application/ld+json" id="${id}">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`)
    .join("\n");
  if (jsonLd) page = page.replace("</head>", `${jsonLd}\n</head>`);

  return page.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

for (const url of paths) {
  const file = url === "/" ? "index.html" : `${url.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), buildPage(url));
}
fs.writeFileSync(path.join(dist, "404.html"), buildPage("/404", { notFound: true }));

console.log(`Prerendered ${paths.length} pages + 404.html`);
