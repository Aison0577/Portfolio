/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        slide:'slide 30s linear infinite'
      },
      keyframes:{
        slide:{
          '0%':{transform:'translateX(0)'},
          '100%':{transform:'translateX(-50%)'}
        }
      }
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
  darkMode:'class'
}