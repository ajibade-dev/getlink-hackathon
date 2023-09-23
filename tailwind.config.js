/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat:["Montserrat", "sans-serif"],
        unica:["Unica One", "cursive"]
      },
      colors:{
        "deep-blue":"#150E28",
        "light-purple":"#D434FE",
        "dark-purple": "#903AFF"
      }
    },
  },
  plugins: [],
}

