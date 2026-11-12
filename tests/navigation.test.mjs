import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const app = join(root, "app");
const read = (path) => readFileSync(join(root, path), "utf8");

function pages(directory) {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) files.push(...pages(join(directory, entry.name)));
    else if (entry.isFile() && entry.name === "page.tsx") files.push(join(directory, entry.name));
  }
  return files;
}

test("every Next.js page renders the shared site header and footer", () => {
  const files = pages(app);
  assert.ok(files.length >= 6, "Expected the multi-page portfolio");
  for (const filename of files) {
    const content = readFileSync(filename, "utf8");
    const path = relative(root, filename);
    assert.match(content, /<SiteHeader\s*\/>/, `${path} must use SiteHeader`);
    assert.match(content, /<SiteFooter\s*\/>/, `${path} must use SiteFooter`);
  }
});

test("header and homepage use one shared navigation source", () => {
  assert.match(read("app/components/SiteChrome.tsx"), /import \{ siteNavigation \} from "\.\/site-navigation"/);
  assert.match(read("app/page.tsx"), /siteNavigation\.map\(/);
});

test("every top-level navigation URL has a Next.js page", () => {
  const source = read("app/components/site-navigation.ts");
  const hrefs = [...source.matchAll(/href:\s*"(\/[^"\n]+\/)"/g)].map((match) => match[1]);
  assert.equal(hrefs.length, 6);
  assert.equal(new Set(hrefs).size, hrefs.length);
  for (const href of hrefs) {
    const route = join(app, href.replace(/^\//, ""), "page.tsx");
    assert.ok(existsSync(route), `Missing page for ${href}`);
  }
});

test("mobile navigation is a real toggle and is visible below desktop breakpoint", () => {
  const header = read("app/components/SiteChrome.tsx");
  const css = read("app/route-pages.css");
  assert.match(header, /aria-expanded=\{menuOpen\}/);
  assert.match(header, /className="site-mobile-nav"/);
  assert.match(header, /onClick=\{\(\) => setMenuOpen\(\(open\) => !open\)\}/);
  assert.match(css, /@media \(max-width: 1080px\)/);
  assert.match(css, /\.site-header \.site-mobile-nav\s*\{[^}]*display:\s*flex;/s);
  assert.match(css, /\.site-menu-toggle\s*\{[^}]*display:\s*inline-flex;/s);
});
