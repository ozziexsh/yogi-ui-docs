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
  safelist: [
    {
      pattern: /bg-(.*)-(100|200|500|600|700)$/,
      variants: ['hover'],
    },
    {
      pattern: /border-(.*)-(700)$/,
    },
    {
      pattern: /text-(.*)-(600|700)$/,
      variants: ['hover'],
    },
  ],
};
