const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false,
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: '5rem 1fr',
        article: '5fr 2fr',
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
        },
      },
      minHeight: {
        20: '5rem',
        24: '6rem',
      },
      fontFamily: {
        sans: ['Noto Sans TC', ...defaultTheme.fontFamily.sans],
        serif: ['Noto Sans Serif', ...defaultTheme.fontFamily.serif],
      },
      height: {
        'mobile-nav': 'calc(100% - 3.5rem)' 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
