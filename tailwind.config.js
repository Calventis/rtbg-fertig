/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          200: '#f8d7d7',
          600: '#630d0d',
          700: '#4a0a0a',
        },
      },
    },
  },
  plugins: [],
};