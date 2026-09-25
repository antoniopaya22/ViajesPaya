#!/usr/bin/env node
// Generates a static HTML shell at every real route path (not the hash-based SPA route), each
// carrying page-specific <title>/description/Open Graph tags, so link previews (WhatsApp,
// Twitter, Slack...) and crawlers that don't execute JS see correct per-page metadata instead of
// index.html's generic ones. Every generated page still boots the full interactive SPA: it's a
// copy of index.html with an inline script that sets location.hash to the matching route before
// the deferred app scripts run, so script.js's own initial render() already draws the right page.
//
// Output goes to og-pages/ (gitignored, mirroring the final route structure) and is folded into
// _site/ by the deploy workflow, same pattern as scripts/generate-bundles.js.
// No npm dependencies — plain Node (fs, path, vm) only.
// Run with: node scripts/generate-og-pages.js

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const COUNTRIES = require('./countries-config');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'og-pages');
const SITE_URL = 'https://antoniopaya22.github.io/ViajesPaya';
const BASE_PATH = '/ViajesPaya';

const ctx = { console };
vm.createContext(ctx);
function loadInSandbox(relPath) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, relPath), 'utf8'), ctx, { filename: relPath });
}

for (const country of COUNTRIES) {
  loadInSandbox(country.countryFile);
  for (const city of country.cityDirs) {
    const dirPath = path.join(ROOT, 'data', country.slug, city);
    if (!fs.existsSync(dirPath)) continue;
    for (const f of fs.readdirSync(dirPath)) {
      if (f.endsWith('.js')) loadInSandbox(path.join('data', country.slug, city, f));
    }
  }
}

// script.js's data section (base countries/cities/places + the per-country merges) ends right
// after this exact line; everything after it is browser-only DOM/event code that can't run in a vm.
const scriptSrc = fs.readFileSync(path.join(ROOT, 'script.js'), 'utf8');
const marker = 'places.push(...polandPlaces, ...hungaryPlaces);';
const markerIdx = scriptSrc.indexOf(marker);
if (markerIdx === -1) throw new Error(`Expected marker "${marker}" not found in script.js — did it move?`);
vm.runInContext(scriptSrc.slice(0, markerIdx + marker.length), ctx, { filename: 'script.js (data section)' });
vm.runInContext('this.__countries = countries; this.__cities = cities; this.__places = places;', ctx);

const countries = ctx.__countries, cities = ctx.__cities, places = ctx.__places;
if (!countries?.length || !cities?.length || !places?.length) throw new Error('Sandbox did not yield countries/cities/places arrays.');

const countryPath = slug => `pais/${slug}`;
const cityPath = citySlug => {
  const city = cities.find(c => c.slug === citySlug);
  if (!city) throw new Error(`Unknown city slug: ${citySlug}`);
  return `${countryPath(city.country)}/ciudad/${citySlug}`;
};
const placePath = place => `${cityPath(place.city)}/lugar/${place.slug}`;

const truncate = (text, max = 160) => {
  const clean = (text || '').replace(/\s+/g, ' ').trim();
  return clean.length <= max ? clean : `${clean.slice(0, max - 1).trimEnd()}…`;
};
const escapeAttr = value => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

function buildPage({ routePath, title, description, image }) {
  const canonical = `${SITE_URL}/${routePath}/`;
  const imageUrl = `${SITE_URL}/${image}`;
  const safeTitle = escapeAttr(title);
  const safeDescription = escapeAttr(description);

  let html = indexHtml;
  html = html.replace(/<title>.*?<\/title>/s, `<title>${safeTitle}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${safeDescription}" />`);
  // These shells live several path segments deep; a <base>, as early as possible in <head>, makes
  // every "./"-relative reference in the page — static tags AND anything script.js builds later,
  // like <img src="assets/..."> with no leading "./" — resolve against the real site root instead
  // of the shell's own nested path.
  html = html.replace('<head>', `<head>\n    <base href="${BASE_PATH}/" />`);
  const extraHead = `<link rel="canonical" href="${canonical}" /><meta property="og:type" content="website" /><meta property="og:title" content="${safeTitle}" /><meta property="og:description" content="${safeDescription}" /><meta property="og:image" content="${imageUrl}" /><meta property="og:url" content="${canonical}" /><meta name="twitter:card" content="summary_large_image" />`;
  html = html.replace('</head>', `${extraHead}</head>`);
  html = html.replace('<div id="app"></div>', `<div id="app"></div>\n    <script>location.hash = ${JSON.stringify(`#/${routePath}`)};</script>`);
  return html;
}

let count = 0;
function write(routePath, html) {
  const dir = path.join(OUT_DIR, routePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  count++;
}

if (fs.existsSync(OUT_DIR)) fs.rmSync(OUT_DIR, { recursive: true });

for (const country of countries) {
  const routePath = countryPath(country.slug);
  write(routePath, buildPage({ routePath, title: `${country.name} — ViajesPaya`, description: truncate(country.intro), image: country.image }));
}
for (const city of cities) {
  const routePath = cityPath(city.slug);
  write(routePath, buildPage({ routePath, title: `${city.name} — ViajesPaya`, description: truncate(city.intro), image: city.image }));
}
for (const place of places) {
  const routePath = placePath(place);
  write(routePath, buildPage({ routePath, title: `${place.name} — ViajesPaya`, description: truncate(place.lead), image: place.image }));
}

console.log(`Generated ${count} static preview pages (${countries.length} countries, ${cities.length} cities, ${places.length} places) under og-pages/`);
