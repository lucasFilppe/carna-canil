/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001f',
        canilThemeRoxo: '#5e1dad',
        textCanil: "#ffffff",
        bluePrimeiro: "#42a0ed",
        blueSegundo: "#267cc1"
      },
      fontFamily:{
        Outfit: ["Outfit", "sans-serif"],
        Ovo:["Ovo", "serif"]
      },
      boxShadow:{
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      }
    },
  },
  plugins: [],
};

