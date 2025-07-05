/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 15s ease-in-out infinite',
        'float-slow-reverse': 'float 18s ease-in-out infinite reverse',
        'blob': 'blob 10s infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'grid-fade': 'grid-fade 3s ease-in-out infinite',
        'particle': 'particle 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(5%, 5%) rotate(5deg)' },
          '50%': { transform: 'translate(-5%, 10%) rotate(-5deg)' },
          '75%': { transform: 'translate(2%, -5%) rotate(3deg)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(50px, -80px) scale(1.2)' },
          '66%': { transform: 'translate(-40px, 40px) scale(0.8)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.5)' },
        },
        'grid-fade': {
          '0%, 100%': { opacity: 0.15 },
          '50%': { opacity: 0.07 },
        },
        particle: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(200px, 200px)' },
          '50%': { transform: 'translate(0, 400px)' },
          '75%': { transform: 'translate(-200px, 200px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      backgroundImage: {
        'grid-white': 'linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} 