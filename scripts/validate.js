#!/usr/bin/env node
// Pre-deploy validation for ViajesPaya's static Japan data.
// No npm dependencies — plain Node (fs, path, vm) only, matching the project's no-build-step approach.
// Run with: node scripts/validate.js
// Exits non-zero (failing the CI job / blocking deploy) if any check fails.

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const COUNTRIES = require('./countries-config');

const ROOT = path.join(__dirname, '..');
const errors = [];
const warnings = [];
const fail = msg => errors.push(msg);
const warn = msg => warnings.push(msg);

// ---- 1. Syntax-check every JS file in the repo (excluding node_modules if any ever appears) ----
function listJsFiles(dir) {
  let out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(listJsFiles(full));
    else if (entry.name.endsWith('.js')) out.push(full);
  }
  return out;
}
const { execFileSync } = require('child_process');
for (const file of listJsFiles(ROOT)) {
  try {
    execFileSync(process.execPath, ['-c', file], { stdio: 'pipe' });
  } catch (e) {
    fail(`Syntax error in ${path.relative(ROOT, file)}:\n${e.stderr}`);
  }
}

// ---- 2. Load the Japan data graph in a sandbox (real execution, not just syntax) ----
const ctx = { console };
vm.createContext(ctx);
function loadInSandbox(relPath) {
  const full = path.join(ROOT, relPath);
  try {
    vm.runInContext(fs.readFileSync(full, 'utf8'), ctx, { filename: relPath });
  } catch (e) {
    fail(`Failed to load ${relPath}: ${e.message}`);
  }
}
loadInSandbox('credits.js');
for (const country of COUNTRIES) {
  loadInSandbox(country.countryFile);
  for (const city of country.cityDirs) {
    const dirPath = path.join(ROOT, 'data', country.slug, city);
    if (!fs.existsSync(dirPath)) { fail(`Missing expected city data directory: data/${country.slug}/${city}`); continue; }
    for (const f of fs.readdirSync(dirPath)) {
      if (f.endsWith('.js')) loadInSandbox(path.join('data', country.slug, city, f));
    }
  }
  loadInSandbox(country.creditsFile);
}

if (errors.length) {
  // If loading failed, nothing below is trustworthy — report and stop here.
  report();
  process.exit(1);
}

const countries = [];
const cities = [];
const places = [];
for (const country of COUNTRIES) {
  vm.runInContext(`this.__c = ${country.countryVar}; this.__ci = ${country.citiesVar}; this.__p = ${country.placesVar};`, ctx);
  countries.push({ ...ctx.__c, __configSlug: country.slug });
  cities.push(...ctx.__ci);
  places.push(...ctx.__p);
}
vm.runInContext('this.__credits = imageCredits;', ctx);
const credits = ctx.__credits || {};

// ---- 3. Extract the allowed icon set directly from script.js (single source of truth) ----
const scriptSrc = fs.readFileSync(path.join(ROOT, 'script.js'), 'utf8');
const topicIconsMatch = scriptSrc.match(/const topicIcons = \{([\s\S]*?)\n\};/);
if (!topicIconsMatch) fail('Could not find `const topicIcons = {...}` in script.js to extract the allowed icon list.');
const allowedIcons = new Set(
  topicIconsMatch ? [...topicIconsMatch[1].matchAll(/^\s*([a-zA-Z]+):/gm)].map(m => m[1]) : []
);
if (allowedIcons.size === 0) fail('Extracted an empty allowed-icon set from script.js — check the regex still matches.');

// ---- 4. Per-place checks ----
const seenSlugs = new Set();
const isImagePath = p => typeof p === 'string' && /\.(jpe?g|png)$/i.test(p);
const JPEG_MAGIC = Buffer.from([0xff, 0xd8, 0xff]);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47]);

function checkImageFile(relImagePath, contextLabel, { cardContext = false } = {}) {
  if (!isImagePath(relImagePath)) { fail(`${contextLabel}: image path doesn't look like a .jpg/.jpeg/.png — "${relImagePath}"`); return; }
  const full = path.join(ROOT, relImagePath);
  if (!fs.existsSync(full)) { fail(`${contextLabel}: image file does not exist on disk — ${relImagePath}`); return; }
  const head = Buffer.alloc(4);
  const fd = fs.openSync(full, 'r');
  fs.readSync(fd, head, 0, 4, 0);
  fs.closeSync(fd);
  const isJpeg = head.slice(0, 3).equals(JPEG_MAGIC);
  const isPng = head.equals(PNG_MAGIC);
  if (!isJpeg && !isPng) {
    fail(`${contextLabel}: ${relImagePath} is not a real JPEG/PNG (first bytes: ${head.toString('hex')}) — likely a saved error page from a failed download.`);
  }
  const creditKey = relImagePath.replace(/^assets\//, '');
  if (!(creditKey in credits)) {
    warn(`${contextLabel}: ${relImagePath} has no credit entry (expected key "${creditKey}" in credits.js or japan-credits.js).`);
  }
  const dot = full.lastIndexOf('.');
  const base = full.slice(0, dot), ext = full.slice(dot);
  if (!fs.existsSync(`${base}.webp`)) {
    warn(`${contextLabel}: ${relImagePath} has no .webp sibling — run node scripts/generate-image-variants.js`);
  }
  if (cardContext && (!fs.existsSync(`${base}-card${ext}`) || !fs.existsSync(`${base}-card.webp`))) {
    warn(`${contextLabel}: ${relImagePath} is used as a card/thumbnail but has no -card variant — run node scripts/generate-image-variants.js`);
  }
}

function walkBlocksForIcons(blocks, contextLabel) {
  for (const block of blocks || []) {
    if (block.icon && !allowedIcons.has(block.icon)) fail(`${contextLabel}: block uses unknown icon "${block.icon}"`);
    if (block.type === 'cards') {
      for (const item of block.items || []) {
        if (item.icon && !allowedIcons.has(item.icon)) fail(`${contextLabel}: card "${item.title}" uses unknown icon "${item.icon}"`);
      }
    }
    if (block.type === 'stop' && block.image && block.image.src) checkImageFile(block.image.src, `${contextLabel} (stop image)`);
  }
}

const cityBySlug = Object.fromEntries(cities.map(c => [c.slug, c]));

for (const place of places) {
  const label = `${place.city}/${place.slug}`;
  const key = label;
  if (seenSlugs.has(key)) fail(`Duplicate place slug within city: ${key}`);
  seenSlugs.add(key);

  if (!place.lead) fail(`${label}: missing "lead"`);
  if (!place.image) fail(`${label}: missing "image"`);
  else checkImageFile(place.image, label, { cardContext: true });

  if (place.gallery) {
    for (const photo of place.gallery) {
      if (photo.src) checkImageFile(photo.src, `${label} (gallery)`);
    }
  }

  const city = cityBySlug[place.city];
  if (!city) fail(`${label}: references unknown city "${place.city}"`);
  else if (city.zones) {
    const zoneSlugs = city.zones.map(z => z.slug);
    if (!place.zone) fail(`${label}: city "${place.city}" has zones but this place has no "zone" field`);
    else if (!zoneSlugs.includes(place.zone)) fail(`${label}: zone "${place.zone}" is not one of ${city.slug}'s defined zones (${zoneSlugs.join(', ')})`);
  } else if (place.zone) {
    warn(`${label}: has a "zone" field but city "${place.city}" doesn't define any zones`);
  }

  if (place.stats) {
    for (const stat of place.stats) {
      if (stat.icon && !allowedIcons.has(stat.icon)) fail(`${label}: stat "${stat.label}" uses unknown icon "${stat.icon}"`);
    }
  }
  if (place.blocks) walkBlocksForIcons(place.blocks, label);

  if (!place.reviewed) warn(`${label}: missing "reviewed" date`);
  else if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(place.reviewed)) fail(`${label}: "reviewed" date "${place.reviewed}" is not in YYYY-MM format`);
}

// ---- 5. Country guide + per-city transport blocks (same icon/image rules) ----
for (const country of countries) {
  if (country.guide) walkBlocksForIcons(country.guide.blocks, `${country.__configSlug}.guide`);
  if (country.food) walkBlocksForIcons(country.food.blocks, `${country.__configSlug}.food`);
  if (country.image) checkImageFile(country.image, `country ${country.__configSlug}`, { cardContext: true });
}
for (const city of cities) {
  if (city.transport) walkBlocksForIcons(city.transport.blocks, `${city.slug}.transport`);
  if (city.food) walkBlocksForIcons(city.food.blocks, `${city.slug}.food`);
  if (city.image) checkImageFile(city.image, `city ${city.slug}`, { cardContext: true });
}

// ---- 6. styles.css brace balance ----
const css = fs.readFileSync(path.join(ROOT, 'styles.css'), 'utf8');
const openBraces = (css.match(/{/g) || []).length;
const closeBraces = (css.match(/}/g) || []).length;
if (openBraces !== closeBraces) fail(`styles.css has unbalanced braces: ${openBraces} "{" vs ${closeBraces} "}"`);

// ---- 7. manifest.json is valid JSON ----
try {
  JSON.parse(fs.readFileSync(path.join(ROOT, 'manifest.json'), 'utf8'));
} catch (e) {
  fail(`manifest.json is not valid JSON: ${e.message}`);
}

// ---- Report ----
function report() {
  if (warnings.length) {
    console.log(`\n⚠ ${warnings.length} warning(s):`);
    warnings.forEach(w => console.log('  - ' + w));
  }
  if (errors.length) {
    console.log(`\n✗ ${errors.length} error(s):`);
    errors.forEach(e => console.log('  - ' + e));
  } else {
    console.log(`\n✓ All checks passed (${places.length} places, ${cities.length} cities, ${Object.keys(credits).length} credited images, ${warnings.length} warning(s)).`);
  }
}
report();
process.exit(errors.length ? 1 : 0);
