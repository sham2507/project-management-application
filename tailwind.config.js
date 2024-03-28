/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceOnce: {
          '0% , 100%': { transform: 'translateY(-50px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },
      animation: {
        bounceOnce: 'bounceOnce 0.5s ease-in-out 1'
      }
    }
  },
  plugins: [],
}

