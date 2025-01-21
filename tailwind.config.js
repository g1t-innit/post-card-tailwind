/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
      fontFamily: {
          "josefin-sans-regular": ["JosefinSans-Regular", "sans-serif"],
          "josefin-sans-bold": ["JosefinSans-Bold", "sans-serif"]
      },
      extend: {}
  },
  plugins: [],
};