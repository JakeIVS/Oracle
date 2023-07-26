/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#004E7A',
        secondary: '#7799AC',
        n: {
          dark: '#B0B0B0',
          light: '#D9D9D9',
        },
      },
    },
  },
  plugins: [],
};
