module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms') // import tailwind forms
  ]
};
