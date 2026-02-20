/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{jsx,js,tsx,ts}"
  ],
   theme: {
    extend: {
      screens: {
        'sm': '360px'
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}

