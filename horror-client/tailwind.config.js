const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      pink: {
        light: "#ff7ce5",
        DEFAULT: "#ff49db",
        dark: "#ff16d1",
      },
      blue: colors.sky,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.rose,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
