#!/usr/bin/env node
// One-off / re-runnable generator for WebP + "card" (thumbnail) image variants.
// Requires ImageMagick's `convert` with WebP support (already used elsewhere in this project).
//
// For EVERY image under assets/: writes a same-size <name>.webp sibling (skipped if
// already newer than the source), used to replace the JPEG in <picture> full-size contexts.
//
// For images listed in CARD_IMAGES (the ones actually used as place/city/country
// thumbnails in a card grid): additionally writes <name>-card.jpg and <name>-card.webp,
// resized to CARD_MAX_WIDTH — used in <picture> card/grid contexts instead of the full
// 1600px original, since a card never displays anywhere near that size.
//
// Run with: node scripts/generate-image-variants.js

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const COUNTRIES = require('./countries-config');

const ROOT = path.join(__dirname, '..');
const ASSETS = path.join(ROOT, 'assets');
const CARD_MAX_WIDTH = 900;
const WEBP_QUALITY = 82;
const CARD_JPG_QUALITY = 78;

function listImages(dir) {
  let out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(listImages(full));
    else if (/\.(jpe?g|png)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

function newerThanSource(target, source) {
  if (!fs.existsSync(target)) return false;
  return fs.statSync(target).mtimeMs >= fs.statSync(source).mtimeMs;
}

function loadCardImageList() {
  // Derive the same way validate.js does: walk every configured country's data graph plus
  // script.js's own hardcoded Spain/Italy/France image fields.
  const vm = require('vm');
  const ctx = { console };
  vm.createContext(ctx);
  const set = new Set();
  for (const country of COUNTRIES) {
    const files = [country.countryFile, ...country.cityDirs.flatMap(d => {
      const dirPath = path.join(ROOT, 'data', country.slug, d);
      return fs.existsSync(dirPath) ? fs.readdirSync(dirPath).filter(f => f.endsWith('.js')).map(f => path.join('data', country.slug, d, f)) : [];
    })];
    for (const f of files) vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
    vm.runInContext(`this.__places=${country.placesVar}; this.__cities=${country.citiesVar}; this.__country=${country.countryVar};`, ctx);
    ctx.__places.forEach(p => set.add(p.image));
    ctx.__cities.forEach(c => set.add(c.image));
    set.add(ctx.__country.image);
  }
  const scriptSrc = fs.readFileSync(path.join(ROOT, 'script.js'), 'utf8');
  for (const m of scriptSrc.matchAll(/image:\s*'([^']+)'/g)) set.add(m[1]);
  return set;
}

let webpMade = 0, webpSkipped = 0, cardMade = 0, cardSkipped = 0;

const allImages = listImages(ASSETS);
for (const full of allImages) {
  const dot = full.lastIndexOf('.');
  const base = full.slice(0, dot);
  const webpTarget = `${base}.webp`;
  if (newerThanSource(webpTarget, full)) { webpSkipped++; }
  else {
    execFileSync('convert', [full, '-quality', String(WEBP_QUALITY), webpTarget]);
    webpMade++;
  }
}

const cardImages = loadCardImageList();
for (const relSrc of cardImages) {
  const full = path.join(ROOT, relSrc);
  if (!fs.existsSync(full)) { console.log(`⚠ skip (missing file): ${relSrc}`); continue; }
  const dot = full.lastIndexOf('.');
  const ext = full.slice(dot);
  const base = full.slice(0, dot);
  const cardJpg = `${base}-card${ext}`;
  const cardWebp = `${base}-card.webp`;
  if (newerThanSource(cardJpg, full) && newerThanSource(cardWebp, full)) { cardSkipped++; continue; }
  execFileSync('convert', [full, '-resize', `${CARD_MAX_WIDTH}x${CARD_MAX_WIDTH}>`, '-quality', String(CARD_JPG_QUALITY), cardJpg]);
  execFileSync('convert', [full, '-resize', `${CARD_MAX_WIDTH}x${CARD_MAX_WIDTH}>`, '-quality', String(WEBP_QUALITY), cardWebp]);
  cardMade++;
}

console.log(`WebP siblings: ${webpMade} generated, ${webpSkipped} already up to date.`);
console.log(`Card variants: ${cardMade} generated, ${cardSkipped} already up to date (of ${cardImages.size} card-context images).`);
