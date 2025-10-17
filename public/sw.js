// Service Worker - UNREGISTER AND CLEANUP
// This service worker is disabled - unregister all instances and clear caches

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Delete ALL caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          console.log('Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    })
  );
  // Unregister this service worker
  event.waitUntil(
    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
        client.postMessage({ type: 'UNREGISTER_SW' });
      });
    })
  );
  event.waitUntil(self.clients.claim());
});

// Don't intercept any requests - let them all go through
self.addEventListener('fetch', (event) => {
  // Pass through all requests without caching
  event.respondWith(fetch(event.request));
});
