/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "templates/**/*.{html,twig}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

