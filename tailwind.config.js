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
          }
        },
      animation: {
        'halfSpin' : 'halfSpin .5s 1 ease-in-out'
      }
      },
    },
  plugins: [],
}
