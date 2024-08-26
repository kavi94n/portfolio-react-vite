/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        Nuni:[ 'Nunito Sans', 'sans-serif']
      
      
    },
  },
  theme:{
    extend: {colors: {primmary:"#0d6efd"}},
  },

  plugins: [],

}
};

