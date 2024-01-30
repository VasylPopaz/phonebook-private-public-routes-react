/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: { sm: { max: '767.98px' } },
    extend: {},
  },
  plugins: [require('daisyui')],
};
