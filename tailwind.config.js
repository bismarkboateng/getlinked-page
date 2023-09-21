/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans'],
        clash: ['Clash Display', 'sans'],
        inter: ['Inter', 'sans']
      },

      keyframes: {
        slideRight: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      },

      animation: {
        slideRight: 'slideRight 0.5s ease',
      },

    },
  },
  plugins: [],
}