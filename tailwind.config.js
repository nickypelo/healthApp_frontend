/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height:{
        '10v': '10vh',
        '15v': '15vh',
        '85v': '85vh',
        'tutView': '62vh',
        '50v': '50vh',
        '40v': '40vh'
      },
      screens:{
        'xs': '550px',
      },
      minHeight:{
        '24': '96px'
      }
    
    },
  },
  plugins: [],
}

