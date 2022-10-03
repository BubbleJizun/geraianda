/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sansPro': 'Source Sans Pro, sans-serif'
    },
    // colors: {
    //   'black': '#181818'
    // },
    extend: {
      gridTemplateColumns: {
        'product': '2fr 1fr'
      },
      height: {
        'banner-sm': 'calc(100vh - 150px)',
        'banner': 'calc(100vh - 100px)',
        'banner-kategori': 'calc(100vh - 640px)',
      },
      animation: {
        'zoom-logo': 'zoom 10s ease-out infinite'
      },
      keyframes: {
        zoom: {
          '0%': {
            display: 'block',
            opacity: '0',
            transform: 'scale(0)',
            transform: 'translateY(90px)',
          },
          '10%': {
            transform: 'scale(1)',
            transform: 'translateY(0px)',
            opacity: '1'
          },
          '90%': {
            opacity: '1'
          },
          '98%': {
            opacity: '0'
          }
        }
      }
    },
    container: {
      center: true,
    },
    
  },
  plugins: [],
}