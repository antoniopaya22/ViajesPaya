// ViajesPaya service worker — offline support for the whole static site.
// SW_VERSION is replaced with the commit hash by the deploy workflow, so every deploy
// installs a fresh cache (old ones are deleted on activate) and open pages are told to reload.
// Locally it stays 'dev'.
const SW_VERSION = 'dev';
const CACHE_NAME = `viajespaya-${SW_VERSION}`;
const SHELL_URLS = ['./', './index.html', './styles.css', './manifest.json', './favicon.svg'];

self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(SHELL_URLS.map(url => new Request(url, { cache: 'reload' })));
      // The whole site's data (every country/city/place) loads as same-origin
      // <script src> tags on the shell page — discover and cache them straight
      // from index.html so a new country/city/bundle is precached automatically,
      // with no separate file list to keep in sync (see the pages.yml deploy
      // outage this same drift caused once already).
      const shellHtml = await (await fetch('./', { cache: 'reload' })).text();
      const scriptUrls = [...shellHtml.matchAll(/<script\s+src="(\.\/[^"]+)"/g)].map(m => m[1]);
      await cache.addAll(scriptUrls.map(url => new Request(url, { cache: 'reload' })));
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

const NEVER_CACHE = ['basemaps.cartocdn.com', 'arcgisonline.com', 'tile.openstreetmap.org'];

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (NEVER_CACHE.some(host => url.hostname.includes(host))) return;
  // Same-origin app files and data, plus the small set of cross-origin library assets
  // (fonts, Leaflet, Chart.js) we're happy to cache — never the satellite/map tile hosts above.
  event.respondWith(
    caches.open(CACHE_NAME).then(async cache => {
      const cached = await cache.match(request);
      const network = fetch(request).then(response => {
        if (response && response.ok) cache.put(request, response.clone());
        return response;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
