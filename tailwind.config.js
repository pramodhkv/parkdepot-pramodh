/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        body: "#191C1F",
        "thin-white": "#ffffff1a",
        "body-400": "#ffffff0a",
        "white-800": "#ffffffcc",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
