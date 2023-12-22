// Clear all caches
caches.keys().then(function(cacheNames) {
    cacheNames.forEach(function(cacheName) {
        caches.delete(cacheName);
    });
  });
