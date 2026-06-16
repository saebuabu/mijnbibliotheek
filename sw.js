const CACHE_NAME = 'bibliotheek-v5';
const URLS_TO_CACHE = [
  '/index.html',
  '/dashboard.html',
  '/toevoegen.html',
  '/css/style.css',
  '/js/app.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'document') {
    // HTML altijd van het netwerk ophalen, cache als fallback
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  } else {
    // CSS/JS uit cache, netwerk als fallback
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
  }
});
