import '@material-ui/core/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    yellow: Palette['primary'];
    white: Palette['primary'];
  }

  interface PaletteOptions {
    yellow?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    yellow: true;
    white: true;
  }

  interface ButtonPropsVariantOverrides {
    'nav-button': true;
    'nav-button-contained': true;
  }
}

// additional breakpoints
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    '2xl': true;
    '3xl': true;
    '4xl': true;
    '5xl': true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    logoText1: React.CSSProperties;
    logoText2: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    logoText1?: React.CSSProperties;
    logoText2?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    logoText1: true;
    logoText2: true;
  }
}
