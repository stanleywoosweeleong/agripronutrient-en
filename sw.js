// AgriPro Notebook (EN) — PWA service worker
//
// Strategy:
//   - Everything is same-origin (no CDN), so just cache-first the app shell.
//   - Install is non-atomic: each file is fetched individually and failures
//     are logged but don't block activation. A partially-cached install still
//     serves what it got; the rest fills in on first online navigation.
//   - Navigation requests fall back to the cached index.html regardless of the
//     exact URL the user visited (handles `/`, deep links, etc.).
//   - Bump CACHE_VERSION whenever any shipped file changes.
//
// Cache name uses "agriproen" to keep it separate from the Chinese version's
// "agripro" cache, so both apps can be installed on the same browser without
// stepping on each other.

const CACHE_VERSION = 'agriproen-v3';
const CACHE_NAME    = `${CACHE_VERSION}-shell`;

const APP_SHELL = [
  './',
  './index.html',
  './app.js',
  './manifest.webmanifest',
  './vendor/app.css',
  './vendor/react.production.min.js',
  './vendor/react-dom.production.min.js',
  './vendor/lucide-bridge.js',
  './vendor/lucide-react.min.js',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png',
  './favicon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    const results = await Promise.allSettled(
      APP_SHELL.map(async (url) => {
        const res = await fetch(url, { cache: 'reload' });
        if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
        await cache.put(url, res);
      })
    );
    const failed = results.filter(r => r.status === 'rejected');
    if (failed.length) {
      console.warn('[SW] install: ' + failed.length + ' files failed to pre-cache',
                   failed.map(f => f.reason && f.reason.message));
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter(k => k !== CACHE_NAME && k.startsWith('agriproen-'))
          .map(k => caches.delete(k))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    event.respondWith(networkThenIndex(req));
    return;
  }

  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(req);
  if (cached) return cached;
  try {
    const fresh = await fetch(req);
    if (fresh.ok && fresh.type === 'basic') {
      cache.put(req, fresh.clone()).catch(() => {});
    }
    return fresh;
  } catch (err) {
    throw err;
  }
}

async function networkThenIndex(req) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const fresh = await fetch(req);
    if (fresh.ok) cache.put('./index.html', fresh.clone()).catch(() => {});
    return fresh;
  } catch (_) {
    const cached = (await cache.match('./index.html')) || (await cache.match('./'));
    if (cached) return cached;
    return Response.error();
  }
}

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
