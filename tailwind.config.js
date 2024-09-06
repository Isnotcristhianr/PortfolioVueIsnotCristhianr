/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [
    //daisyUi
    // eslint-disable-next-line no-undef
    require('daisyui',)
  ],
  daisyui: {
    themes: ["corporate", "night"],
  },
}

