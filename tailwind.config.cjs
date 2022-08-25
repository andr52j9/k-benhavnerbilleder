const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],

  theme: {
    colors: {
      primary: "#E9DAC1",
      accent: "#002B5B",
    },

    extend: {
      fontFamily: {
        h1: "poppins,system-ui, sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
