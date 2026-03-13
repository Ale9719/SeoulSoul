/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'seoul-pink': '#f8bccb',    // Il rosa della colonna Album
        'seoul-orange': '#e9d6bc',  // L'arancione della colonna Skincare
        'seoul-blue': '#d1edf1',    // L'azzurro della colonna Merch
        'seoul-neon': '#ff00ff',    // Il fucsia neon del logo
      },
    },
  },
  plugins: [],
}