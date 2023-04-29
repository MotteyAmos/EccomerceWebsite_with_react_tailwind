/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        padding:{
          DEFAULT:'1rem',
          lg:"8rem",
        },
      },

      screen:{
        'sm':{"max": "920px"},
        'xl':{'max':'1200px'},
        'lg':{"max": '991px'},
        'xsm':{"max":"600px"},
        
      }
    },
  },
  plugins: [],
}