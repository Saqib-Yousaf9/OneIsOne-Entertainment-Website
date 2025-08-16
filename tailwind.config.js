/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-orange': '#FF5C00',
        'neon-pink': '#FF06C1',
        'neon-blue': '#2A00FF',
      },
    },
  },
  plugins: [],
} 