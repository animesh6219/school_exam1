self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('testpwa').then((cache) => cache.addAll([
      '/school_exam1/',
      '/school_exam1/index.htm',
      '/school_exam1/index.js',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
