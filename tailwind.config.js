module.exports = {
  content: ["./source/**/*.{html,css,js}"],
  theme: {
    extend: {
      fontFamily: {
        Title: ['"Bebas Neue"', "cursive"],
        Text: ['"Ubuntu"', "sans-serif"],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}