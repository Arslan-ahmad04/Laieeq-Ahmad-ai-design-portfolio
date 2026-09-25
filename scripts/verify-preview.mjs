import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
const base = process.env.PREVIEW_URL || "http://127.0.0.1:3002";
const inventory = JSON.parse(
  await readFile(
    new URL("../docs/source-inventory.json", import.meta.url),
    "utf8",
  ),
);
const routes = ["/"];
const titles = new Set();
const assets = new Set();
for (const route of routes) {
  const r = await fetch(base + route);
  assert.equal(r.status, 200, route + " must return 200");
  const html = await r.text();
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title, route + " title");
  assert.ok(!titles.has(title), route + " unique title");
  titles.add(title);
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, route + " one h1");
  assert.match(
    html,
    /<meta name="description" content="[^"]+"/,
    route + " description",
  );
  assert.match(
    html,
    /<meta name="robots" content="noindex, follow"/,
    route + " preview noindex",
  );
  assert.doesNotMatch(
    html,
    /<link rel="canonical"/,
    route + " no invented canonical",
  );
  assert.doesNotMatch(
    html,
    /hello@example.com|github.com\/example|76\+|Projects shipped/,
  );
  for (const img of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(img[0], /alt="[^"]+"/);
    const src = img[0].match(/src="([^"]+)"/)?.[1];
    if (src) assets.add(src.replaceAll("&amp;", "&"));
  }
  if (route === "/") {
    for (const href of [
      "mailto:laieeq.studio@gmail.com",
      "tel:+923058883897",
      "https://wa.me/923058883897",
      "https://www.instagram.com/LAIEEQ_AHMAD_/",
    ])
      assert.ok(html.includes('href="' + href + '"'), href);
    assert.ok(!html.includes("<form"));
  }
  if (route.startsWith("/portfolio/")) assert.match(html, /Reference preview/);
  if (route === "/") {
    const data = JSON.parse(
      html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1],
    );
    assert.equal(data["@type"], "Person");
    assert.equal(data.name, "Laieeq Ahmad");
    assert.ok(!html.includes("Download CV"));
  }
  console.log("PASS " + route);
}
const redirects = {about:'about',skills:'skills',services:'about',portfolio:'portfolio',experience:'experience',contact:'contact'};
for (const [route, id] of Object.entries(redirects)) {
 const r=await fetch(base+'/'+route,{redirect:'manual'});
 assert.equal(r.status,308,route+' redirect');
 assert.equal(r.headers.get('location'),'/#'+id);
}
for (const project of inventory.projects) {
 const path=new URL(project.page).pathname;
 const r=await fetch(base+path,{redirect:'manual'});
 assert.equal(r.status,308,path+' redirect');
 assert.equal(r.headers.get('location'),'/#work-'+path.split('/').at(-1));
}
const home=await (await fetch(base)).text();
let previous=-1;
for(const id of ['about','skills','experience','portfolio','contact']) {
 const index=home.indexOf('id="'+id+'"');
 assert.ok(index>previous,'section order: '+id);previous=index;
}
assert.equal([...home.matchAll(/<details\b/g)].length,7,'seven inline case studies');
assert.match(home,/Reference preview/);
for (const route of [
  "/not-a-real-page",
  "/portfolio/unknown-project",
  "/projects/unknown-project",
])
  assert.equal(
    (await fetch(base + route)).status,
    404,
    route + " must return 404",
  );
for (const asset of assets) {
  const response = await fetch(base + asset);
  assert.equal(response.status, 200, asset);
  assert.match(response.headers.get("content-type"), /^image\//);
}
const robots = await (await fetch(base + "/robots.txt")).text();
assert.match(robots, /Disallow: \/$/m);
const sitemap = await (await fetch(base + "/sitemap.xml")).text();
assert.ok(!sitemap.includes("<loc>"), "Preview sitemap must be empty");
const og = await fetch(base + "/opengraph-image");
assert.equal(og.status, 200);
assert.match(og.headers.get("content-type"), /image\/png/);
for (const icon of ["/icon.svg", "/favicon.ico"])
  assert.equal((await fetch(base + icon)).status, 200);
console.log(
  "PASS " +
    routes.length +
    " public pages; " +
    assets.size +
    " image URLs; 3 unknown routes; contact links; structured data; preview SEO; OG image; icons.",
);
