import '@material-ui/core/styles/createPalette';

import type {} from '@mui/x-data-grid/themeAugmentation';

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
    'order-btn': true;
    'tel-btn': true;
    'logo-btn': true;
    'md-btn': true;
    'round-btn': true;
    'long-btn': true;
    'footer-link': true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    white: true;
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
    swiperText: React.CSSProperties;
    swiperTitle: React.CSSProperties;
    productTitle: React.CSSProperties;
    productSubtitle: React.CSSProperties;
    productText: React.CSSProperties;
    socialTitle: React.CSSProperties;
    socialSubtitle: React.CSSProperties;
    FAQ: React.CSSProperties;
    FAQTitle: React.CSSProperties;
    productImageContent: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    logoText1?: React.CSSProperties;
    logoText2?: React.CSSProperties;
    swiperText?: React.CSSProperties;
    swiperTitle?: React.CSSProperties;
    productTitle?: React.CSSProperties;
    productSubtitle?: React.CSSProperties;
    productText?: React.CSSProperties;
    socialTitle?: React.CSSProperties;
    socialSubtitle?: React.CSSProperties;
    FAQ?: React.CSSProperties;
    FAQTitle?: React.CSSProperties;
    productImageContent?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    logoText1: true;
    logoText2: true;
    swiperText: true;
    swiperTitle: true;
    productTitle: true;
    productSubtitle: true;
    productText: true;
    socialTitle: true;
    socialSubtitle: true;
    FAQ: true;
    FAQTitle: true;
    productImageContent: true;
  }
}

declare module '@mui/system' {
  interface Shape {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  }
}
