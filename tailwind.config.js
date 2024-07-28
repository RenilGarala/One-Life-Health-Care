/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      // => @media (max-width: 1536px) { ... }
      dxl: {max: "1536px" },

      // => @media (max-width: 1279px) { ... }
      xl: { max: "1279px" },

      // => @media (max-width: 1023px) { ... }
      lg: { max: "1023px" },

      // => @media (max-width: 767px) { ... }
      md: { max: "767px" },

      // => @media (max-width: 639px) { ... }
      sm: { max: "639px" },
    },
  },
  plugins: [],
  darkMode: "class",
};
