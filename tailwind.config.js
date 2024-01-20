const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      cursive: ["Sunshine Boulevard"],
      serif: ["Crimson Pro", "Georgia"],
      sans: ["Lato", "Helvetica", "Arial", "sans-serif"],
    },
    colors: {
      ...colors,
      secondary: {
        light: "#EEF9FC",
        DEFAULT: "#DCF3F9",
      },
      primary: {
        light: "#1F4A6F",
        DEFAULT: "#173651",
      },
    },
    extend: {},
  },
  plugins: [],
};
