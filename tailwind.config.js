/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily : {
        "inter" : ["inter"],
        "Circular" : ['Circular STD']
      },
      colors :{
        "primary" :'#5D50C6',
        "secondary": "#F85E9F",
        "orange": "#FF5722",
        "grey" : "#191825"


      }
    },
  },
  plugins: [],
}

