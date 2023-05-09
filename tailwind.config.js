/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate': '#2c4152',
        'whiteSmoke': '#ccc',
        'crimson': '#F0122D'
      }
    },
  },
  plugins: [],
}

