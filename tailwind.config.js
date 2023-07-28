/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'),require("daisyui")
,require('@tailwindcss/forms')
,require('@tailwindcss/line-clamp')
,require('@tailwindcss/typography')
],
};
