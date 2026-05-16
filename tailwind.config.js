/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './source.jsx',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"PingFang SC"',
               '"Microsoft YaHei"', '"Helvetica Neue"', 'Helvetica',
               'Arial', 'sans-serif'],
      },
    },
  },
  // Be tolerant of dynamic class strings built with template literals in the source.
  // Tailwind only sees the literal text of source files, so any `${level === 'high' ? 'red' : 'green'}-200`
  // style class needs to be explicit here. Kept narrow to keep the output small.
  safelist: [
    { pattern: /^(bg|text|border)-(red|orange|amber|green|stone|blue|emerald)-(50|100|200|300|400|500|600|700|800|900)$/ },
  ],
  plugins: [],
};
