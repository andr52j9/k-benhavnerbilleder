const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // colors: {
      //   primary: "#E9DAC1",
      //   accent: "#002B5B",
      // },
      // fontFamily: {
      //   h1: "'Rye', cursive",
      //   h2: "font-family: 'Lora', serif;",
      // },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
