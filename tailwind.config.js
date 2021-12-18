const colors = require('tailwindcss/colors')
module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        red: colors.red,
        blue: colors.blue,
        green: colors.green,
        yellow: colors.yellow,
        orange: colors.orange,
        pink: colors.pink,
        purple: colors.purple,
        gray: colors.gray,
        black: colors.black,
        white: colors.white,
      }
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'), // import tailwind forms
   ],
  }