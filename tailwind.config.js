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
      },
      backgroundImage:{
        'bg1':"url('assets/images/cool-background.png')",
        'bg2':"url('assets/images/cool-background (1).png')",
        'bg3':"url('assets/images/cool-background (2).png')",
        'bg4':"url('assets/images/cool-background (3).png')",
        'bg5':"url('assets/images/cool-background (4).png')",
        'bg6':"url('assets/images/cool-background (5).png')",
        'bg7':"url('assets/images/cool-background (6).png')",
        'bg8':"url('assets/images/cool-background (7).png')",
        'bg9':"url('assets/images/cool-background (8).png')",
        'bg10':"url('assets/images/cool-background (9).png')",
        'bg11':"url('assets/images/cool-background (10).png')",
        'bg12':"url('assets/images/cool-background.svg')",
        'bg13':"url('assets/images/cool-background (1).svg')",
        'bg14':"url('assets/images/cool-background (2).svg')",
        'bg15':"url('assets/images/cool-background (3).svg')",
        'bg16':"url('assets/images/cool-background (4).svg')",
        'bg17':"url('assets/images/cool-background (5).svg')",
      },
      colors:{
        'gradient1':'linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))',
      } 
      


    },
  },
  plugins: [],
}

