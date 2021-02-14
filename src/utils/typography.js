import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    { name: 'Noto Sans TC', styles: ['300', '400', '500', '700'] }
  ],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
