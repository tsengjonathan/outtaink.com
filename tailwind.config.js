const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      gridTemplateColumns: {
        article: '5fr 2fr',
        featured: '55% 45%',
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
        border: '#656565',
        background: '#F3F3F3',
      },
      minHeight: {
        24: '6rem',
      },
      fontFamily: {
        en: ['Gopher', ...defaultTheme.fontFamily.sans],
        zh: ['Noto Sans TC', ...defaultTheme.fontFamily.sans],
        mixed: ['Gopher', 'Noto Sans TC', ...defaultTheme.fontFamily.sans],
        hand: ['lihsianti', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        heading: '8px 8px #B2D5D3'
      },
      letterSpacing: {
        'lihsianti': '-.125em'
      },
      screens: {
        page: '1272px'
      },
      width: {
        18: '4.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    base: false,
  },
};
