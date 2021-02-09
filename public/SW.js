console.log('Register from SW>JS');


var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/js/0.chunk.js',
  '/static/js/main.chunk.js',
  '/static/media/logo.103b5fa1.svg',
  '/favicon.ico',
  "/SW.js",
  'https://fonts.googleapis.com/css2?family=Acme&display=swap',
  '/static/media/bin.25ec54dc.svg',
  '/sockjs-node',
  'https://fonts.gstatic.com/s/acme/v11/RrQfboBx-C5_XxrBbg.woff2',
  '/manifest.json',
  '/logo192.png',
  'https://pedantic-kowalevski-c233fb.netlify.app'

];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request).then(
            function(response) {
              // Check if we received a valid response
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
  
              // IMPORTANT: Clone the response. A response is a stream
              // and because we want the browser to consume the response
              // as well as the cache consuming the response, we need
              // to clone it so we have two streams.
              var responseToCache = response.clone();
  
              caches.open(CACHE_NAME)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
  
              return response;
            }
          );
        })
      );
  });