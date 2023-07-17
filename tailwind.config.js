/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
  ],
  theme: {
    extend: {
      letterSpacing: {
        'sempit': '.0.5em',
        'lebar': '.5em',
      }
    },
  },
  plugins: [],
}

