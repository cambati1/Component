/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gray: {
          500: '#717680',
          700: '#414651',
        },
        error: {
          500: '#F04438',
        },
      },
    },
  },
  plugins: [],
}

