const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: '5rem 1fr',
        article: '5fr 2fr',
        featured: '45% 55%',
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
        20: '5rem',
        24: '6rem',
      },
      maxHeight: {
        112: '28rem',
      },
      fontFamily: {
        en: ['Gopher', ...defaultTheme.fontFamily.sans],
        zh: ['Noto Sans TC', ...defaultTheme.fontFamily.sans],
        mixed: ['Gopher', 'Noto Sans TC', ...defaultTheme.fontFamily.sans],
        hand: ['lihsianti', ...defaultTheme.fontFamily.sans]
      },
      height: {
        'mobile-nav': 'calc(100% - 3.5rem)',
      },
      boxShadow: {
        heading: '8px 8px #B2D5D3'
      },
      letterSpacing: {
        'lihsianti': '-.125em'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};
