/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        roboto: ['Roboto', 'sans-serif']
      },
      colors:{
        primary: "#2B3467",
        secondary: "#BAD7E9",
        tertiary: "#EB455F"
      }
    },

  },
  plugins: [],
}
