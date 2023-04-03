const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px", md: "768px", lg: "976px", xl: "1440px"
      },
      fontFamily: {
        slab: ['var(--font-roboto-slab)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        'white-rgba': 'rgb(255 255 255 / 59%)'
      },
      boxShadow: {
        'nav': 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
      },
      listStyleType: {
        square: 'square'
      }
    },
  },
  plugins: [],
}
