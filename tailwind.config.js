/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#07111f',
        cyanGlow: '#18d5ff',
        amberGlow: '#f6b44b',
      },
      boxShadow: {
        soft: '0 22px 70px rgba(15,23,42,.10)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
