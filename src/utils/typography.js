import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    { name: 'Noto Sans TC', styles: ['100', '200', '300', '400', '500', '600', '700'] },
    { name: 'Noto Serif TC', styles: ['400', '700'] },
  ],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
