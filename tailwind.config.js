/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'bg-cycle': {
          '0%': { backgroundColor: '#4b5563' },   // gray-600
          '16%': { backgroundColor: '#374151' },  // gray-700
          '32%': { backgroundColor: '#1f2937' },  // gray-800
          '48%': { backgroundColor: '#111827' }, // gray-900
          '64': { backgroundColor: '#111827' },   // gray-900
          '80%': { backgroundColor: '#1f2937' },  // gray-800
          '96%': { backgroundColor: '#374151' },  // gray-700
          '100%': { backgroundColor: '#4b5563' }, // gray-600
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-0.5rem)' },
        },
        'wave-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(8px)' },
        },
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }, // zoom in
        },
        'zoom-2': {
         '0%, 100%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1)' }, // zoom in
        },
        bgCycle: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'bg-cycle': 'bg-cycle 4s infinite',
        wave: 'wave 2s ease-in-out infinite',
        'wave-x': 'wave-x 2s ease-in-out infinite',
        zoom: 'zoom 4s ease-in-out infinite',
        'zoom-2': 'zoom-2 4s ease-in-out infinite',
        'bg-cycle': 'bgCycle 15s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

