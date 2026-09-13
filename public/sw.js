// Retired service worker.
//
// The site does not register a service worker. An earlier version of this file
// cached pages "cache first", so any browser that ever installed it would keep
// showing an old copy of the site. If a browser still has it, this version
// clears its caches, unregisters itself and reloads open tabs from the network.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((key) => caches.delete(key)));
    await self.registration.unregister();
    const windows = await self.clients.matchAll({ type: 'window' });
    windows.forEach((client) => client.navigate(client.url));
  })());
});
