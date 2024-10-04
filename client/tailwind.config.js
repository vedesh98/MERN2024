/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
    },
  //   screens: {
  //     "2xl": { max: "1535px" },
  //     // => @media (max-width: 1535px) { ... }

  
  //     xl: { max: "1279px" },
  //     // => @media (max-width: 1279px) { ... }
  
  //     lg: { max: "1023px" },
  //     // => @media (max-width: 1023px) { ... }
  
  //     md: { max: "767px" },
  //     // => @media (max-width: 767px) { ... }
  
  //     sm: { max: "639px" },
  //     // => @media (max-width: 639px) { ... }
  

  //     xs: { max: "479px" },
  //     // => @media (max-width: 479px) { ... }
  // },
  },

  

  plugins: [],
};
