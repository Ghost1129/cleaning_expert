/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-image':"url('/src/assets/Group 7083.png')"
      }
    },
  },
  plugins: [],
}
