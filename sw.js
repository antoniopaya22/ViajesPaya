// ViajesPaya service worker — offline support for the whole static site.
// Bump SW_VERSION only when this caching logic itself changes, not on content updates:
// every same-origin GET already gets stale-while-revalidate, so new deploys reach
// users automatically without needing a manifest of files to keep in sync.
const SW_VERSION = 'v1';
const CACHE_NAME = `viajespaya-${SW_VERSION}`;
const PRECACHE_URLS = ['./', './index.html', './styles.css', './script.js', './japan.js', './credits.js', './japan-credits.js', './manifest.json', './favicon.svg'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
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
