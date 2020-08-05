import Typography from 'typography';

const typography = new Typography({
  headerFontFamily: ['Noto Sans TC'],
  bodyFontFamily: ['Noto Serif TC'],
  googleFonts: [
    { name: 'Noto Sans TC', styles: ['400', '700'] },
    { name: 'Noto Serif TC', styles: ['400', '700'] }
  ]
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
