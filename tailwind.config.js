/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "body-bg": "rgb(25, 28, 31)",
        "thin-white": "rgba(255, 255, 255, 0.1)",
        "searchbar-400": "rgba(255, 255, 255, 0.04)",
        "white-800": "rgba(255, 255, 255, 0.8)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
