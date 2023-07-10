/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      mono: ["Roboto Mono", "monospace"],
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      'deep-blue' : '#0a192f',
      'bright-yellow': '#fde58e',
      'bright-pink': '#fd8e8e',
      'white': '#fff',
    },
    extend: {
      padding: {
        'pb:300': '300px',
        'pb:500': '500px',
        'pb:400': '400px',
      }
    }
  },
  
  plugins: [],
}
