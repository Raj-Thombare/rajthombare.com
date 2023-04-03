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
      animation: {
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      animationDelay: {
        0: "0s",
        2: "0.2s",
        4: "0.4s",
        6: "0.6s",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
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
