/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Quicksand", "sans-serif"],
        secondary: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#1A3C35",
        secondary: "#FFC400",
        tertiary: "#7e7e7e",
        light: "#fff",
        dark: "#000",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
};
