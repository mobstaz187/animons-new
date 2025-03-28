/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem', // This adds support for -left-15
      },
      colors: {
        'game': {
          'dark': '#0A1929',
          'darker': '#061221',
          'light': '#FFFFFF',
          'cyan': '#3B82F6',
          'cyan-dark': '#1D4ED8',
          'red': '#EF4444',
          'red-dark': '#B91C1C',
          'blue': '#1E3A8A',
          'blue-dark': '#172554',
          'yellow': '#FFCB05',
          'yellow-dark': '#C7A008'
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
        'neon-red': '0 0 10px rgba(239, 68, 68, 0.5), 0 0 20px rgba(239, 68, 68, 0.3)',
        'neon-blue': '0 0 10px rgba(30, 58, 138, 0.5), 0 0 20px rgba(30, 58, 138, 0.3)'
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};