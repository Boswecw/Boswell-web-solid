// minimal SW: takes control immediately and caches a few shell files
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open('app-shell-v1').then((cache) =>
      cache.addAll([
        '/',            // important: control start_url
        '/index.html',
        '/manifest.webmanifest'
        // you can add CSS/JS build paths here if they’re static (e.g., /assets/main-xxxxx.js)
      ])
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim()); // take control of existing clients
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  // network-first for navigation; cache-first for others
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('/index.html'))
    );
  } else {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request))
    );
  }
});
