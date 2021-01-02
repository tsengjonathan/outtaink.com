module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx'
  ],
  darkMode: false,
  theme: {
    extend: {
      gridTemplateColumns: {
        'sidebar': '85px 1fr'
      }
    },
    colors: {
      default: {
        50: '#00524d',
        100: '#006761',
        200: '#00756e',
        300: '#268984',
        400: '#4c9e99',
        500: '#73b3b0',
        600: '#99c8c5',
        700: '#b2d5d3',
        800: '#cce3e2',
        900: '#e5f1f0',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
