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
        primary: '#3b82f6',
        secondary: '#1e40af',
        tertiary: '#2563eb',
        quaternary: '#1d4ed8',
        quinary: '#1e40af',
        senary: '#f3f4f6',
        light: '#f8fafc',
        dark: '#1e293b',
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
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
