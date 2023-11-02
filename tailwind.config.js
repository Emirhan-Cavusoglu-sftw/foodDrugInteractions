/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        palanquin: ['Palanquin', 'sans-serif'],
        nabla:["Nabla","cursive"],
        rightheus:["Righteous", "cursive"],
        kanit:["Kanit", "sans-serif"],
        caveat:["Caveat","cursive"],
        carterone:["Carter One","cursive"],
        alkatra:["Alkatra","cursive"],
        poppins:["Poppins","sans-serif"],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }  


    },
  },
  plugins: [],
}

