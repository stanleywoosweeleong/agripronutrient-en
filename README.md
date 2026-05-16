# AgriPro 农学笔记 — PWA build (v2)

Your React source packaged as a true Progressive Web App. Installable, runs in standalone mode, **fully offline** after first visit, and zero dependency on any third-party CDN.

## What changed in v2 (bug fixes)

The previous build had the right shape but several reliability issues. All fixed:

| # | Bug | Fix |
|---|-----|-----|
| 1 | SW pre-cached `esm.sh/lucide-react@0.383.0` but the page fetched `…?deps=react@18` → different cache key, useless pre-cache | All deps self-hosted under `vendor/` |
| 2 | ESM dep had a deep import graph that single-URL caching couldn't capture | Self-hosted UMD bundle, single file |
| 3 | `cache.addAll()` was atomic — one failed file killed the entire install | Non-atomic install with `Promise.allSettled` |
| 4 | Navigation fallback to `./index.html` missed requests for `/agripro/` | Pre-cache `./` too; network-first for navigations |
| 5 | Splash hid on script *load*, before React painted (brief flicker) | Splash hides on `agripro:mounted` event fired after first paint |
| 6 | `crossorigin` attrs on CDN scripts were fragile | No more CDN |
| 7 | `cdn.tailwindcss.com` was a runtime JIT dependency | Tailwind CSS precompiled to `vendor/app.css` (purged + minified) |
| — | Latent: lucide-react UMD reads `globalThis.react`, React UMD writes `globalThis.React` | `vendor/lucide-bridge.js` aliases the two before lucide loads |

## Files

**Runtime (deploy these):**

```
index.html
app.js
manifest.webmanifest
sw.js
icon-192.png
icon-512.png
icon-512-maskable.png
apple-touch-icon.png
favicon.png
vendor/
  app.css                       Tailwind CSS, precompiled and purged
  react.production.min.js       React 18.3.1
  react-dom.production.min.js   ReactDOM 18.3.1
  lucide-bridge.js              react/React casing shim
  lucide-react.min.js           lucide-react 0.383.0
```

**Source (keep for editing):**

```
source.jsx        Your React source (edit this)
build.js          source.jsx -> app.js
tailwind.config.js + src.css   Tailwind input
```

## Script load order in `index.html`

All five `<script defer>` tags execute in source order after HTML parse:

1. `vendor/react.production.min.js` — defines `window.React`
2. `vendor/react-dom.production.min.js` — defines `window.ReactDOM`
3. `vendor/lucide-bridge.js` — aliases `window.react = window.React`
4. `vendor/lucide-react.min.js` — reads `window.react`, defines `window.LucideReact`
5. `app.js` — destructures `React`, `ReactDOM`, `LucideReact`, mounts `<App/>`

When mount finishes, `app.js` dispatches `agripro:mounted`; the splash fades out.

## Run locally

```bash
python3 -m http.server 8765
# then open http://localhost:8765
```

## Test offline

1. Open in Chrome/Edge, let it load fully.
2. DevTools → **Application → Service Workers** → confirm `sw.js` is activated.
3. DevTools → **Network → Offline**.
4. Refresh — app should still load completely.
5. DevTools → **Application → Cache Storage** → `agripro-v2-shell` should contain ~14 entries.

## Updating the app

1. Edit `source.jsx`.
2. If you changed class names, also re-run Tailwind:
   ```bash
   npx tailwindcss -c tailwind.config.js -i src.css -o vendor/app.css --minify
   ```
3. `node build.js` to rebuild `app.js`.
4. In `sw.js`, bump `CACHE_VERSION` (e.g. `agripro-v2` → `agripro-v3`).
5. Redeploy. Users get the new version on their next visit, no manual cache clear.

## Size

| File | Raw | Gzipped (est) |
|------|-----|---------------|
| `index.html` | 6 KB | 2 KB |
| `app.js` | 201 KB | 35 KB |
| `vendor/app.css` | 47 KB | 8 KB |
| `vendor/react*` | 139 KB | 45 KB |
| `vendor/lucide-react.min.js` | 466 KB | 110 KB |
| Icons + manifest + SW | ~40 KB | ~25 KB |
| **Total** | **~900 KB** | **~225 KB** |

After install, all subsequent visits load from the cache — essentially instant, zero network. This is what a real PWA should feel like.
