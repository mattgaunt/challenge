module.exports = {
  purge: [
    './public/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        off: {
          black: '#161A20;'
        },
        carbon: {
          50: '#EDEEEF',
          100: '#C0C3C7',
          200: '#878E97',
          300: '#4B5159',
          400: '#363C44',
          500: '#2B3037',
          600: '#262B32',
          700: '#20252C',
          800: '#1D2229',
          900: '#1B1F26'
        },
        purple: {
          50: '#E2E1FF',
          100: '#B4B1FF',
          200: '#8480FF',
          300: '#736FFF',
          400: '#6762FF',
          500: '#5D57FF',
          600: '#5853EB',
          700: '#534FD7',
          800: '#504DCD',
          900: '#4B49B9'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
