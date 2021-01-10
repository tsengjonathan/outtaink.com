import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    { name: 'Noto Sans TC', styles: ['200', '400', '600', '700'] },
    { name: 'Noto Serif TC', styles: ['400', '700'] }
  ]
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
