/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  css: ["~/assets/css/tailwind.css"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
