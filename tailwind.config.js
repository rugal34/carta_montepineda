/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brown: { 500: "#6B3E26", 700: "#4E2C1A" },
        green: { 500: "#2F855A", 700: "#22543D" },
        yellow: { 100: "#FEF3C7" },
      }
    },
  },
  plugins: [],
}
