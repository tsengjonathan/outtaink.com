module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'sidebar': '85px 1fr'
      }
    },
  },
  variants: {},
  plugins: [],
}
