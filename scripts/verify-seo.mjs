import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
// Compile the real TypeScript modules in memory with isolated build-time settings.
function context(env) {
  const cache = new Map();
  function load(id) {
    if (cache.has(id)) return cache.get(id);
    const file = path.join(root, "src", id.replace(/^@\//, "")) + ".ts";
    const source = ts.transpileModule(fs.readFileSync(file, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
      },
    }).outputText;
    const exports = {};
    cache.set(id, exports);
    new Function("require", "exports", "process", source)(load, exports, {
      env,
    });
    return exports;
  }
  return load;
}
let load = context({});
let seo = load("@/lib/seo");
assert.equal(seo.siteOrigin, null);
assert.equal(seo.indexingEnabled, false);
assert.equal(
  seo.pageMetadata("About", "Description", "/about").alternates,
  undefined,
);
assert.equal(
  seo.pageMetadata("About", "Description", "/about").robots.index,
  false,
);
load = context({
  NEXT_PUBLIC_SITE_URL: "https://portfolio.example.invalid",
  SITE_INDEXING: "false",
});
seo = load("@/lib/seo");
assert.equal(seo.indexingEnabled, false);
assert.equal(
  seo.pageMetadata("About", "Description", "/about").alternates.canonical,
  "https://portfolio.example.invalid/about",
);
load = context({
  NEXT_PUBLIC_SITE_URL: "https://portfolio.example.invalid",
  SITE_INDEXING: "true",
});
seo = load("@/lib/seo");
assert.equal(seo.indexingEnabled, true);
assert.equal(
  seo.pageMetadata("About", "Description", "/about").robots.index,
  true,
);
assert.equal(
  seo.pageMetadata("Work", "Description", "/portfolio").robots.index,
  false,
);
assert.equal(seo.pageMetadata("Home", "Description", "/").robots.index, false);
assert.deepEqual(seo.indexablePaths(), []);
const projects = load("@/data/portfolio").portfolio;
projects[0].artworkVerified = true;
assert.deepEqual(seo.indexablePaths(), []);
assert.ok(!seo.indexablePaths().includes("/"));
projects.forEach((p) => {
  p.artworkVerified = true;
});
assert.deepEqual(seo.indexablePaths(), ["/"]);
for (const route of seo.indexablePaths()) {
  const m = seo.pageMetadata("Test", "Description", route);
  assert.equal(
    m.alternates.canonical,
    "https://portfolio.example.invalid" + route,
  );
  assert.equal(m.robots.index, true);
  assert.equal(
    m.openGraph.images[0].url,
    "https://portfolio.example.invalid/opengraph-image",
  );
}
for (const origin of [
  "javascript:alert(1)",
  "https://example.invalid/path",
  "https://user:pass@example.invalid",
  "https://example.invalid?x=1",
])
  assert.throws(() => context({ NEXT_PUBLIC_SITE_URL: origin })("@/lib/seo"));
console.log(
  "PASS preview noindex, domain configuration, per-route canonicals, partial artwork readiness, complete sitemap, social images, and invalid origins. No production settings were changed.",
);
