// lucide-react@0.383.0 UMD bundle reads its peer dep from `globalThis.react`
// (lowercase), but the React UMD bundle defines `globalThis.React` (capital R).
// Without this shim, `LucideReact` initializes with `react = undefined` and
// every icon throws on first render.
// This script must run *between* react UMD and lucide-react UMD.
(function () {
  if (typeof window === 'undefined') return;
  if (window.react) return;            // already aliased somehow
  if (!window.React) {
    console.error('lucide-bridge: React global not found; load order wrong');
    return;
  }
  window.react = window.React;
})();
