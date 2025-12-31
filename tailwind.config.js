/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        micro: {
          olive: "#2E3104", 
          lime: "#9CA432",
          black: "#0b0b0b",
          white: "#EFEFEF",
        },
      },
    },
  },
  plugins: [],
};