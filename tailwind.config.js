/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'infinity': '#ff5a5f',
      },
    },
  },
  plugins: [require("daisyui")],
}