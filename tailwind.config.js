/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // 'accordian': "rgba(255, 255, 255, 0.2)"
      },
      fontFamily: {
        'familiar': 'Montserrat sans-serif',
        'opens': 'Open Sans sans-serif',
        'robot': 'Roboto sans-serif',
        'poppins': 'Poppins',
      }
    },
  },
  plugins: [],
}

