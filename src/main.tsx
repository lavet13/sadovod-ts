import ReactDOM from 'react-dom/client';
import App from './App';

import { CssBaseline, StyledEngineProvider, alpha } from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material';

import RalewayExtraLightTTF from './assets/fonts/Raleway/Raleway-ExtraLight.ttf';
import RalewayLightTTF from './assets/fonts/Raleway/Raleway-Light.ttf';
import RalewayRegularTTF from './assets/fonts/Raleway/Raleway-Regular.ttf';
import RalewayMediumTTF from './assets/fonts/Raleway/Raleway-Medium.ttf';
import RalewaySemiBoldTTF from './assets/fonts/Raleway/Raleway-SemiBold.ttf';
import RalewayBoldTTF from './assets/fonts/Raleway/Raleway-Bold.ttf';
import RalewayExtraBoldTTF from './assets/fonts/Raleway/Raleway-ExtraBold.ttf';
import RalewayBlackTTF from './assets/fonts/Raleway/Raleway-Black.ttf';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const RalewayExtraLight = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: '200',
  src: `url(${RalewayExtraLightTTF}) format('truetype')`,
};

const RalewayLight = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: '300',
  src: `url(${RalewayLightTTF}) format('truetype')`,
};

const RalewayRegular = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: '400',
  src: `url(${RalewayRegularTTF}) format('truetype')`,
};

const RalewayMedium = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: '500',
  src: `url(${RalewayMediumTTF}) format('truetype')`,
};

const RalewaySemiBold = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: '600',
  src: `url(${RalewaySemiBoldTTF}) format('truetype')`,
};

const RalewayBold = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: '700',
  src: `url(${RalewayBoldTTF}) format('truetype')`,
};

const RalewayExtraBold = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: '800',
  src: `url(${RalewayExtraBoldTTF}) format('truetype')`,
};

const RalewayBlack = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: '900',
  src: `url(${RalewayBlackTTF}) format('truetype')`,
};

const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4CAF50',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#3D3D3D',
      contrastText: '#FFF',
    },
    yellow: {
      main: '#FFAD1D',
      contrastText: '#FFF',
    },
    white: {
      main: '#FFF',
      contrastText: '#FFF',
    },
    contrastThreshold: 4.5,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 769,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
      '3xl': 1920,
      '4xl': 2560,
      '5xl': 3200,
    },
  },
});

const {
  typography: { pxToRem },
  breakpoints,
  palette,
} = defaultTheme;

// https://fluid-typography.netlify.app/

const theme = createTheme({
  ...defaultTheme,
  typography: {
    fontFamily: 'Raleway',
    logoText1: {
      fontWeight: 700,
      fontSize: pxToRem(28),
      lineHeight: 1,
      [breakpoints.down('md')]: {
        fontSize: 'clamp(0.6rem, 2.5vw + 0.6rem, 1.8rem)',
      },
    },
    logoText2: {
      fontSize: pxToRem(17),
      fontWeight: 900,
      lineHeight: 1,
      [breakpoints.down('md')]: {
        fontSize: 'clamp(0.3rem, 1.5vw + 0.3rem, 1rem)',
      },
    },
    body1: {
      fontWeight: 400,
      fontSize: pxToRem(22),
      color: '#3D3D3D',
      [breakpoints.down('md')]: {
        fontSize: 'clamp(0.3rem, 1.5vw + 0.3rem, 1rem)',
      },
    },
    h1: {
      fontSize: pxToRem(135),
      fontWeight: 700,
      lineHeight: 1.2,
      [breakpoints.down('md')]: {
        fontSize: 'clamp(1.2rem, 7.9vw + 1.2rem, 5rem)',
      },
    },
    h2: {
      fontSize: pxToRem(71),
      fontWeight: 700,
      lineHeight: 1,
      [breakpoints.down('md')]: {
        fontSize: 'clamp(0.4rem, 5.4vw + 0.4rem, 3rem)',
      },
    },
    h3: {
      fontSize: pxToRem(39),
      fontWeight: 500,
      lineHeight: 1,
    },
    h4: {
      fontSize: pxToRem(32),
      [breakpoints.down('md')]: {
        fontSize: 'clamp(0.4rem, 2.3vw + 0.4rem, 1.5rem)',
      },
    },
    h5: {
      fontWeight: 700,
      fontSize: pxToRem(28),
      lineHeight: 1,
    },
    subtitle1: {
      fontSize: pxToRem(39),
      fontWeight: 500,
      lineHeight: 1,
      [breakpoints.down('md')]: {
        fontSize: 'clamp(0.6rem, 1.5vw + 0.6rem, 1.3rem)',
      },
    },
    button: {
      fontWeight: 700,
      fontSize: pxToRem(23),
      lineHeight: 2,
      textTransform: 'unset',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'nav-button-contained' },
          style: ({ theme }) =>
            theme.unstable_sx({
              color: palette.common.white,
              backgroundColor: palette.primary.main,
              ':hover': {
                backgroundColor: palette.primary.dark,
              },

              '&& .MuiTouchRipple-child': {
                backgroundColor: palette.secondary.contrastText,
              },

              alignSelf: 'stretch',

              lineHeight: 1,
              fontSize: pxToRem(23),
            }),
        },
        {
          props: { variant: 'nav-button-contained', color: 'primary' },
          style: ({ theme }) =>
            theme.unstable_sx({
              fontSize: pxToRem(10),
              px: { sm: theme.spacing(4), xs: theme.spacing(2) },
              py: 0,
              [theme.breakpoints.down('md')]: {
                fontSize: 'clamp(0.8rem, 0.8vw + 0.8rem, 1.2rem)',
              },
              [theme.breakpoints.down('sm')]: {
                fontSize: 'clamp(0.8rem, 0.8vw + 0.8rem, 1rem)',
              },
            }),
        },
        {
          props: { variant: 'nav-button-contained', color: 'secondary' },
          style: {
            backgroundColor: palette.secondary.main,

            ':hover': {
              backgroundColor: palette.secondary.dark,
            },

            '&& .MuiTouchRipple-child': {
              backgroundColor: palette.secondary.contrastText,
            },
          },
        },
        {
          props: { variant: 'nav-button' },
          style: {
            color: palette.primary.main,
            fontSize: pxToRem(23),
          },
        },
        {
          props: { variant: 'nav-button', color: 'secondary' },
          style: {
            color: palette.secondary.main,
          },
        },
      ],
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          [breakpoints.down('md')]: {
            fontSize: 'clamp(0.8rem, 0.6vw + 0.8rem, 1.1rem)',
          },
          '&.Mui-selected': {
            fontWeight: 700,
            color: palette.primary.main,
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: 'Raleway',
        variantMapping: {
          logoText1: 'span',
          logoText2: 'span',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          [breakpoints.up('md')]: {
            fontSize: pxToRem(9),
          },
          [breakpoints.up('lg')]: {
            fontSize: pxToRem(10),
          },
        },
        html: [
          { '@font-face': RalewayExtraLight },
          { '@font-face': RalewayLight },
          { '@font-face': RalewayRegular },
          { '@font-face': RalewayMedium },
          { '@font-face': RalewaySemiBold },
          { '@font-face': RalewayBold },
          { '@font-face': RalewayExtraBold },
          { '@font-face': RalewayBlack },
        ],
        'html, body': {
          padding: 0,
        },
      },
    },
  },
  shape: {
    borderRadius: 0,
  },
});

root.render(
  // <React.StrictMode>
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StyledEngineProvider>
  // </React.StrictMode>
);
