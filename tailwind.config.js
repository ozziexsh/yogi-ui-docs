const { yogiSafelist } = require('yogi-ui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/yogi-ui/dist/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  safelist: [...yogiSafelist({ colors: ['indigo', 'teal', 'slate'] })],
};
