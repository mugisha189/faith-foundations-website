/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
        'caveat': ['Caveat', 'cursive'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: '#ffc107',
        secondary: '#122f2a',
        quaternary: {
          DEFAULT: '#3ead3c',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse': 'pulse 4s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { 
            transform: 'scale(1) translate(-50%, -50%)',
            opacity: '1'
          },
          '50%': { 
            transform: 'scale(1.1) translate(-50%, -50%)',
            opacity: '0.8'
          },
        },
      },
    },
  },
  plugins: [],
}
