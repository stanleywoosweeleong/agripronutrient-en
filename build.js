// Build script: source.jsx -> app.js (single classic-script bundle).
//
// Inputs:  source.jsx (the React source you edit)
// Outputs: app.js     (JSX transformed; mounts to #root)
//
// At runtime, app.js expects three globals (set by vendor scripts in index.html):
//   - window.React
//   - window.ReactDOM
//   - window.LucideReact   (UMD global from lucide-react.min.js)
//
// React + ReactDOM are pulled from vendor/*.js. LucideReact is the UMD bundle.
// No CDN, no ESM, no top-level await needed at runtime.

const fs = require('fs');
const babel = require('@babel/core');

const src = fs.readFileSync('source.jsx', 'utf8');

// 1) Pull the icon list out of the original lucide-react import, so we can wire each
//    named import to a member of window.LucideReact.
const lucideMatch = src.match(/import \{([\s\S]*?)\} from 'lucide-react';/);
if (!lucideMatch) throw new Error('Could not locate lucide-react import block in source.jsx');
const lucideNames = lucideMatch[1]
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

// 2) Strip both imports + the trailing `export default App;`. We replace them
//    with explicit destructuring from the runtime globals.
const stripped = src
  .replace(/import React[^;]+;[\r\n]+/m, '')                       // react import
  .replace(/import \{[\s\S]*?\} from 'lucide-react';[\r\n]+/m, '') // lucide import
  .replace(/export default App;\s*$/m, '');                         // default export

// 3) Prelude wires globals -> local names. Done at top level so it's available
//    everywhere in the bundle.
const prelude = `// === Auto-generated prelude (PWA wrapper) ===
// Pull React hooks off the React UMD global.
const { useState, useEffect, useMemo, useRef } = React;

// LucideReact UMD bundle exposes every icon as a named property on the global.
// Bail loudly if it's missing — better a clear error than a silent ReferenceError.
if (typeof LucideReact === 'undefined') {
  throw new Error('AgriPro: lucide-react UMD bundle not loaded before app.js');
}
const {
  ${lucideNames.join(',\n  ')}
} = LucideReact;
// === End prelude ===

`;

// 4) Mount call appended at the end.
const mount = `

// === Auto-generated mount (PWA wrapper) ===
(function mountApp() {
  const rootEl = document.getElementById('root');
  if (!rootEl) {
    console.error('AgriPro: #root element not found');
    return;
  }
  const root = ReactDOM.createRoot(rootEl);
  root.render(React.createElement(App));

  // Tell the host page (which owns the splash) that React is mounted.
  // The page listens for this event and fades out the splash after the first paint.
  // Two rAFs to be sure the first React commit has actually painted.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event('agripro:mounted'));
    });
  });
})();
`;

// 5) Transform JSX -> JS.
const combined = prelude + stripped + mount;
console.log('Transforming JSX...');
const result = babel.transformSync(combined, {
  presets: [['@babel/preset-react', { runtime: 'classic' }]],
  filename: 'app.jsx',
  babelrc: false,
  configFile: false,
});

fs.writeFileSync('app.js', result.code);
console.log('Wrote app.js (' + result.code.length + ' bytes)');
console.log('Lucide icons wired:', lucideNames.length);
