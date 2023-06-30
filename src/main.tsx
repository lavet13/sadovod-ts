import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import {
  alpha,
  CssBaseline,
  keyframes,
  StyledEngineProvider,
} from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material';

import RalewayExtraLightTTF from './assets/fonts/Raleway/Raleway-ExtraLight.ttf';
import RalewayLightTTF from './assets/fonts/Raleway/Raleway-Light.ttf';
import RalewayRegularTTF from './assets/fonts/Raleway/Raleway-Regular.ttf';
import RalewayMediumTTF from './assets/fonts/Raleway/Raleway-Medium.ttf';
import RalewaySemiBoldTTF from './assets/fonts/Raleway/Raleway-SemiBold.ttf';
import RalewayBoldTTF from './assets/fonts/Raleway/Raleway-Bold.ttf';
import RalewayExtraBoldTTF from './assets/fonts/Raleway/Raleway-ExtraBold.ttf';
import RalewayBlackTTF from './assets/fonts/Raleway/Raleway-Black.ttf';
import HomePage from './pages/home-page.component';
import React from 'react';
import ErrorPage from './pages/error-page.component';
import DeliveryPage from './pages/delivery-page.component';
import CatalogsPage from './pages/catalogs-page.component';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path='delivery' element={<DeliveryPage />} />
        <Route path='catalogs' element={<CatalogsPage />} />
      </Route>
    </Route>
  )
);

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
  unstable_sxConfig: {
    borderRadius: {
      themeKey: 'shape',
    },
  },
  shape: {
    borderRadius: 0,
    sm: 3,
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#4CAF50',
      contrastText: '#fff',
    },
    secondary: {
      main: '#3D3D3D',
      contrastText: '#fff',
    },
    yellow: {
      main: '#FFAD1D',
      contrastText: '#fff',
    },
    white: {
      main: '#FFF',
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
        fontSize: 'clamp(0.6rem, 1.7vw + 0.6rem, 1.4rem)',
      },
    },
    logoText2: {
      fontSize: pxToRem(17),
      fontWeight: 900,
      lineHeight: 1,
      [breakpoints.down('md')]: {
        fontSize: 'clamp(0.4rem, 0.8vw + 0.4rem, 0.8rem)',
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
          props: { variant: 'logo-btn' },
          style: ({ theme }) => ({
            paddingBottom: 0,
            paddingTop: 0,
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            '&& .MuiTouchRipple-child': {
              backgroundColor: theme.palette.primary.main,
            },
            '&& .MuiTouchRipple-rippleVisible': {
              opacity: 0.5,
              animationName: keyframes`
              0% {
                transform: scale(0);
                opacity: 0.1;
              }
              100% {
                transform: scale(1);
                opacity: 0.5;
              }
            `,
              animationDuration: '550ms',
              animationTimingFunction: theme.transitions.easing.easeInOut,
            },
            [theme.breakpoints.down('md')]: {
              paddingRight: theme.spacing(1),
              paddingLeft: theme.spacing(1),
              alignSelf: 'stretch',
            },
          }),
        },
        {
          props: { variant: 'nav-button-contained' },
          style: {
            paddingBottom: 0,
            paddingTop: 0,
            color: palette.common.white,
            backgroundColor: palette.secondary.main,

            ':hover': {
              backgroundColor: palette.primary.main,
            },

            '&& .MuiTouchRipple-child': {
              backgroundColor: palette.primary.contrastText,
            },

            '&.active': {
              backgroundColor: palette.primary.main,
            },

            alignSelf: 'stretch',
            lineHeight: 1,
            fontSize: pxToRem(23),
          },
        },
        {
          props: { variant: 'nav-button-contained', color: 'primary' },
          style: ({ theme }) =>
            theme.unstable_sx({
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
          props: { variant: 'nav-button' },
          style: {
            paddingBottom: 0,
            paddingTop: 0,
            color: palette.secondary.main,
            fontSize: pxToRem(23),
            '&.active': {
              color: palette.primary.main,
              backgroundColor: alpha(palette.primary.main, 0.04),
            },
            ':hover': {
              backgroundColor: alpha(palette.secondary.main, 0.04),
            },
          },
        },
        {
          props: { variant: 'order-btn', color: 'yellow' },
          style: ({ theme }) =>
            theme.unstable_sx({
              fontSize: pxToRem(37),
              color: palette.common.white,
              backgroundColor: palette.yellow.main,
              ':hover': {
                boxShadow: theme.shadows[4],
                backgroundColor: palette.yellow.main,
              },
              '&& .MuiTouchRipple-child': {
                backgroundColor: palette.yellow.contrastText,
              },
              px: 4,
              borderRadius: 'sm',
              whiteSpace: 'nowrap',
              [theme.breakpoints.down('md')]: {
                fontSize: 'clamp(1rem, 0.4vw + 1rem, 1.2rem)',
              },
            }),
        },
        {
          props: { variant: 'tel-btn' },
          style: ({ theme }) =>
            theme.unstable_sx({
              fontSize: pxToRem(54),
              color: palette.common.white,
              ':hover': {
                backgroundColor: alpha(palette.common.white, 0.04),
              },
              px: 2,
              borderRadius: 'sm',
              whiteSpace: 'nowrap',
              [theme.breakpoints.down('md')]: {
                fontSize: 'clamp(1.1rem, 0.4vw + 1.1rem, 1.3rem)',
                color: theme.palette.secondary.main,
              },
            }),
        },
      ],
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          '&& .MuiTouchRipple-child': {
            backgroundColor: theme.palette.primary.light,
          },
          ':hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.04),
          },
          '&.active': {
            fontWeight: 700,
            color: palette.primary.main,
          },
          [breakpoints.down('md')]: {
            fontSize: 'clamp(0.8rem, 0.6vw + 0.8rem, 1.1rem)',
          },
          '&.Mui-selected': {
            fontWeight: 700,
            color: palette.primary.main,
          },
          ...(ownerState.color === 'error'
            ? {
                color: theme.palette.error.main,
                '&& .MuiTouchRipple-child': {
                  backgroundColor: theme.palette.error.dark,
                },
                fontWeight: 700,
                ':hover': {
                  backgroundColor: alpha(theme.palette.error.main, 0.04),
                },
              }
            : {}),
        }),
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
});

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
