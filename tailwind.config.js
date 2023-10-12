/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        halfSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' }
          },
          appearance: {
            '0%': { opacity: '0'},
            '100%': { opacity: '1'}
          },
          appearanceOut: {
            '0%': { opacity: '1'},
            '100%': { opacity: '0'}
          }
        },
      animation: {
        'halfSpin' : 'halfSpin .5s 1 ease-in-out',
        'appearance': 'appearance .8s forwards',
        'appearanceOut': 'appearanceOut .3s forwards'
      }
      },
    },
  plugins: [],
}
