/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'comp': "url('/src/assets/Landing/comp.jpg')"
      }
    }
  },
  plugins: [],
}

