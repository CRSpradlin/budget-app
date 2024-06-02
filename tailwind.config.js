/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'budget': {
          light: 'rgb(199 210 254)',
          DEFAULT: 'rgb(129 140 248)',
          dark: 'rgb(49 46 129)',
        },
      },
    },
  },
  plugins: [],
}
