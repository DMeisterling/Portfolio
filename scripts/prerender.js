import { readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const buildDir = path.join(root, "build");
const ssrDir = path.join(root, "build-ssr");
const siteUrl = "https://danielmeisterling.de";
const rootMarkup = '<div id="root"></div>';

const { render, pages } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);
const template = await readFile(path.join(buildDir, "index.html"), "utf8");

if (!template.includes(rootMarkup)) {
  throw new Error(`Template is missing ${rootMarkup}`);
}

const escapeHtml = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const setAttribute = (html, selector, value) =>
  html.replace(new RegExp(`(<${selector} [^>]*?(?:content|href)=")[^"]*`), `$1${value}`);

const withPageHead = (html, page) => {
  const title = escapeHtml(page.title);
  const url = `${siteUrl}${page.path}`;

  let result = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  result = setAttribute(result, 'meta property="og:title"', title);
  result = setAttribute(result, 'meta name="twitter:title"', title);
  result = setAttribute(result, 'meta property="og:url"', url);
  return setAttribute(result, 'link rel="canonical"', url);
};

await writeFile(path.join(buildDir, "app-shell.html"), template);

for (const page of pages) {
  const html = withPageHead(template, page).replace(
    rootMarkup,
    `<div id="root">${render(page.path)}</div>`
  );
  await writeFile(path.join(buildDir, page.file), html);
  console.log(`prerendered ${page.path} -> build/${page.file}`);
}

await rm(ssrDir, { recursive: true, force: true });
