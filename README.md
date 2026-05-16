# AgriPro Notebook (EN) — PWA build

English-language build of the agronomy notebook React app, packaged as a true Progressive Web App. Installable, runs in standalone mode, **fully offline** after first visit, zero CDN dependencies.

> Sibling repo: there's also a Chinese-language build (`AgriPro 农学笔记`) using the same architecture. Both can be installed side-by-side on the same browser — they use separate service worker caches (`agriproen-*` vs `agripro-*`) and different accent colors in the icon (blue dot vs gold dot).

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
source.jsx        React source (edit this)
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

## Run locally

```bash
python -m http.server 8765
# then open http://localhost:8765
```

## Test offline

1. Open in Chrome/Edge, let it load fully.
2. DevTools → **Application → Service Workers** → confirm `sw.js` is activated.
3. DevTools → **Network** → switch the throttling dropdown to **Offline**.
4. Refresh — the app should still load completely.

## Updating the app

1. Edit `source.jsx`.
2. If you changed class names, recompile Tailwind:
   ```bash
   npx tailwindcss -c tailwind.config.js -i src.css -o vendor/app.css --minify
   ```
3. `node build.js` to rebuild `app.js`.
4. In `sw.js`, bump `CACHE_VERSION` (e.g. `agriproen-v1` → `agriproen-v2`).
5. Redeploy. Users get the new version on their next visit.

## Size (approx)

| File | Raw | Gzipped (est) |
|------|-----|---------------|
| `index.html` | 6 KB | 2 KB |
| `app.js` | 207 KB | 35 KB |
| `vendor/app.css` | 48 KB | 8 KB |
| `vendor/react*` | 139 KB | 45 KB |
| `vendor/lucide-react.min.js` | 466 KB | 110 KB |
| Icons + manifest + SW | ~40 KB | ~25 KB |
| **Total** | **~900 KB** | **~225 KB** |
