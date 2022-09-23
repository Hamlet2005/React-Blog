/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    minHeight:{
      'calc': '773px',
    },
    extend: {
      width: {
        '128': '32rem',
        '500': '56rem'
      },
      height: {
        '128': '32rem',
      },
      colors: {
        'black-shadow': 'rgba(0,0,0,0.4)',
      },
      margin: {
        '5px': '0 auto',
      }
    },
  },
  plugins: [],
}
