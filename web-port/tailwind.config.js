const { default: plugin } = require('tailwindcss')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midblack: '#0F1624',
        midindigo: '#945DD6',
        midcyan: '#6978D1',
        midblue: '#13ADC7',
      },
    },
  },
  plugins: []
}

