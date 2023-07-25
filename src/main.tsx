import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  alpha,
  CssBaseline,
  keyframes,
  StyledEngineProvider,
} from '@mui/material';

import { ThemeProvider, createTheme, lighten } from '@mui/material/styles';

import EastmanRegularWOFF from './assets/fonts/Eastman/Eastman-Regular.woff';
import EastmanRegularWOFF2 from './assets/fonts/Eastman/Eastman-Regular.woff2';
import EastmanRegularTTF from './assets/fonts/Eastman/Eastman-Regular.ttf';
import EastmanMediumWOFF from './assets/fonts/Eastman/Eastman-Medium.woff';
import EastmanMediumWOFF2 from './assets/fonts/Eastman/Eastman-Medium.woff2';
import EastmanMediumTTF from './assets/fonts/Eastman/Eastman-Medium.ttf';
import EastmanExtraBoldWOFF from './assets/fonts/Eastman/Eastman-Extrabold.woff';
import EastmanExtraBoldWOFF2 from './assets/fonts/Eastman/Eastman-Extrabold.woff2';
import EastmanExtraBoldTTF from './assets/fonts/Eastman/Eastman-Extrabold.ttf';

import { Provider } from 'react-redux';
import { store } from './app/store';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/virtual';
import 'swiper/css/effect-coverflow';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { router } from './app/root-router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const EastmanRegular = {
  fontFamily: 'Eastman',
  fontStyle: 'normal',
  fontWeight: '400',
  src: `url(${EastmanRegularWOFF2}) format('woff2'), url(${EastmanRegularWOFF}) format('woff'), url(${EastmanRegularTTF}) format('truetype')`,
};

const EastmanMedium = {
  fontFamily: 'Eastman',
  fontStyle: 'normal',
  fontWeight: '500',
  src: `url(${EastmanMediumWOFF2}) format('woff2'), url(${EastmanMediumWOFF}) format('woff'), url(${EastmanMediumTTF}) format('truetype')`,
};

const EastmanExtraBold = {
  fontFamily: 'Eastman',
  fontStyle: 'normal',
  fontWeight: '800',
  src: `url(${EastmanExtraBoldWOFF2}) format('woff2'), url(${EastmanExtraBoldWOFF}) format('woff'), url(${EastmanExtraBoldTTF}) format('truetype')`,
};

const defaultTheme = createTheme({
  unstable_sxConfig: {
    borderRadius: {
      themeKey: 'shape',
    },
  },
  shape: {
    borderRadius: 0,
    sm: 2,
    md: 8,
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
    contrastThreshold: 4.5,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 769,
      lg: 1024,
      xl: 1280,
      '2xl': 1630,
      '3xl': 1919,
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
// https://mui.com/material-ui/customization/default-theme/
const theme = createTheme({
  ...defaultTheme,
  typography: {
    fontFamily: 'Raleway',
    logoText1: {
      fontWeight: 700,
      fontSize: pxToRem(34),
      lineHeight: 1.1,
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
    swiperText: {
      fontSize: pxToRem(23),
      fontWeight: 700,
      lineHeight: 1.2,
    },
    swiperTitle: {
      fontSize: pxToRem(50),
      fontWeight: 700,
      lineHeight: 1.1,
      [breakpoints.down('md')]: {
        fontSize: 'clamp(0.9rem, 2.3vw + 0.9rem, 2rem)',
      },
    },
    body1: {
      fontWeight: 500,
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

    productTitle: {
      fontSize: pxToRem(70),
      fontWeight: 700,
      lineHeight: 'normal',
      [breakpoints.down('md')]: {
        fontSize: 'clamp(1.4rem, 4.7vw + 0.2rem, 2.4rem)',
      },
      [breakpoints.down('sm')]: {
        fontSize: 'clamp(0.2rem, 4.5vw + 0.2rem, 1.4rem)',
      },
    },

    productSubtitle: {
      fontSize: pxToRem(28),
      fontWeight: 600,
      fontFamily: 'Montserrat',

      [breakpoints.down('md')]: {
        fontSize: 'clamp(1rem, 2.3vw + 0.4rem, 1.5rem)',
      },

      [breakpoints.down('sm')]: {
        fontSize: 'clamp(0.7rem, 1.1vw + 0.7rem, 1rem)',
      },
    },

    productText: {
      fontSize: pxToRem(21),
      fontWeight: 400,
      fontFamily: 'Montserrat',

      [breakpoints.down('md')]: {
        fontSize: 'clamp(0.9rem, 1.4vw + 0.5rem, 1.2rem)',
      },
    },

    productImageContent: {
      fontFamily: 'Montserrat',
      fontSize: pxToRem(20),
      fontWeight: 400,
      color: palette.common.white,
      textAlign: 'center',

      [breakpoints.down('md')]: {
        fontSize: 'clamp(0.8rem, 2vw + 0.2rem, 1.2rem)',
      },

      [breakpoints.down('sm')]: {
        fontSize: 'clamp(0.7rem, 1.1vw + 0.7rem, 1rem)',
      },
    },

    socialTitle: {
      fontSize: pxToRem(38),
      fontWeight: 700,

      [breakpoints.down('md')]: {
        fontSize: 'clamp(1.4rem, 2.8vw + 0.7rem, 2rem)',
      },
      [breakpoints.down('sm')]: {
        fontSize: 'clamp(1rem, 1.5vw + 1rem, 1.4rem)',
      },
    },
    socialSubtitle: {
      fontSize: pxToRem(32),
      fontWeight: 400,
    },

    FAQ: {
      color: alpha(palette.primary.main, 0.25),
      fontSize: pxToRem(226),
      fontWeight: 700,
      fontFamily: 'Montserrat',
      lineHeight: 'normal',

      position: 'relative',
      transform: `translate(${pxToRem(-15)}, ${pxToRem(65)})`,
      zIndex: -100,

      [breakpoints.down('md')]: {
        fontSize: 'clamp(7.5rem, 7vw + 5.6rem, 9rem)',
        transform: `translate(${pxToRem(-7)}, ${pxToRem(25)})`,
      },
      [breakpoints.down('sm')]: {
        fontSize: 'clamp(3rem, 16.9vw + 3rem, 7.5rem)',
      },
    },

    FAQTitle: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: pxToRem(48),

      [breakpoints.down('md')]: {
        fontSize: 'clamp(1.5rem, 2.3vw + 0.9rem, 2rem)',
      },

      [breakpoints.down('sm')]: {
        fontSize: 'clamp(0.1rem, 4.5vw + 0.1rem, 1.3rem)',
      },
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
      whiteSpace: 'nowrap',
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
        },
      },
    },
    MuiIconButton: {
      variants: [
        {
          props: { color: 'white' },
          style: ({ theme }) => ({
            color: theme.palette.common.white,
            ':hover': {
              backgroundColor: alpha(
                palette.common.white,
                palette.action.hoverOpacity
              ),
            },
            ':active': {
              backgroundColor: alpha(
                palette.common.white,
                palette.action.activatedOpacity
              ),
            },
          }),
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'logo-btn' },
          style: ({ theme }) => ({
            paddingBottom: 0,
            paddingTop: 0,
            paddingLeft: theme.spacing(3), // 8px * 3
            paddingRight: theme.spacing(3),
            ':hover': {
              backgroundColor: alpha(
                theme.palette.primary.main,
                palette.action.hoverOpacity
              ),
            },
            ':active': {
              backgroundColor: alpha(
                theme.palette.primary.main,
                palette.action.activatedOpacity
              ),
            },
            '&& .MuiTouchRipple-child': {
              backgroundColor: alpha(theme.palette.primary.main, 0.5),
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
              paddingRight: theme.spacing(1), // 8px
              paddingLeft: theme.spacing(1), // 8px
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
              backgroundColor: lighten(palette.primary.dark, 0.05),
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
            ':hover': {
              backgroundColor: alpha(
                palette.secondary.main,
                palette.action.hoverOpacity
              ),
            },
            ':active': {
              backgroundColor: alpha(
                palette.secondary.main,
                palette.action.activatedOpacity
              ),
            },
            '&.active': {
              color: palette.primary.main,
              backgroundColor: alpha(
                palette.primary.main,
                palette.action.focusOpacity
              ),
            },
          },
        },
        {
          props: { variant: 'nav-button', color: 'white' },
          style: ({ theme }) =>
            theme.unstable_sx({
              color: palette.common.white,
              py: theme.spacing(1),
              lineHeight: 1.8,
              fontWeight: 600,
              ':hover': {
                backgroundColor: alpha(
                  palette.common.white,
                  palette.action.hoverOpacity
                ),
              },
              ':active': {
                backgroundColor: alpha(
                  palette.common.white,
                  palette.action.activatedOpacity
                ),
              },
              '&.active': {
                color: palette.common.white,
                backgroundColor: alpha(
                  palette.common.white,
                  palette.action.focusOpacity
                ),
              },
            }),
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
              fontFamily: 'Montserrat',
              color: palette.common.white,
              ':hover': {
                backgroundColor: alpha(
                  palette.common.white,
                  palette.action.hoverOpacity
                ),
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
        {
          props: { variant: 'md-btn' },
          style: ({ theme }) =>
            theme.unstable_sx({
              py: pxToRem(13),
              px: pxToRem(28),
              lineHeight: 1.4,

              color: palette.secondary.main,
              backgroundColor: palette.common.white,
              borderRadius: theme.shape.sm,
              boxShadow: theme.shadows[1],

              ':active': {
                boxShadow: theme.shadows[8],
              },

              [breakpoints.down('md')]: {
                fontSize: 'clamp(0.8rem, 1.6vw + 0.4rem, 1.15rem)',
              },
            }),
        },
        {
          props: { variant: 'md-btn', color: 'primary' },
          style: ({ theme }) =>
            theme.unstable_sx({
              ':hover,:active': {
                backgroundColor: palette.primary.main,
                color: palette.common.white,
              },
            }),
        },
        {
          props: { variant: 'md-btn', color: 'secondary' },
          style: ({ theme }) =>
            theme.unstable_sx({
              ':hover,:active': {
                backgroundColor: lighten(palette.secondary.dark, 0.05),
                color: palette.common.white,
              },
            }),
        },
        {
          props: { variant: 'long-btn' },
          style: ({ theme }) =>
            theme.unstable_sx({
              fontSize: pxToRem(22),
              fontWeight: 700,
              lineHeight: 1.4,
              py: pxToRem(13),
              px: pxToRem(40),
              borderRadius: theme.shape.sm,

              color: palette.common.white,
              backgroundColor: palette.primary.main,

              ':hover': {
                backgroundColor: lighten(palette.secondary.dark, 0.05),
              },
              [breakpoints.down('md')]: {
                fontSize: 'clamp(0.9rem, 1.4vw + 0.5rem, 1.2rem)',
              },
            }),
        },
        {
          props: { variant: 'long-btn', color: 'primary' },
          style: ({ theme }) =>
            theme.unstable_sx({
              color: palette.common.white,
              backgroundColor: palette.primary.main,

              ':hover': {
                backgroundColor: lighten(palette.secondary.dark, 0.05),
              },
            }),
        },
        {
          props: { variant: 'long-btn', color: 'white' },
          style: ({ theme }) =>
            theme.unstable_sx({
              color: palette.secondary.main,
              backgroundColor: palette.common.white,

              ':hover': {
                backgroundColor: lighten(palette.secondary.dark, 0.05),
                color: palette.common.white,
              },
            }),
        },
        {
          props: { variant: 'footer-link' },
          style: ({ theme }) =>
            theme.unstable_sx({
              fontFamily: 'Montserrat',
              color: palette.common.white,
              fontSize: pxToRem(20),
              fontWeight: 400,
              borderRadius: 'sm',

              [theme.breakpoints.down('md')]: {
                fontSize: 'clamp(0.7rem, 0.9vw + 0.5rem, 0.9rem)',
              },
              [theme.breakpoints.down('sm')]: {
                fontSize: 'clamp(0.6rem, 0.4vw + 0.6rem, 0.7rem)',
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
            backgroundColor: alpha(
              theme.palette.primary.main,
              palette.action.hoverOpacity
            ),
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
                  backgroundColor: alpha(
                    theme.palette.error.main,
                    palette.action.hoverOpacity
                  ),
                },
              }
            : {}),
        }),
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          logoText1: 'span',
          logoText2: 'span',
          swiperTitle: 'p',
          swiperText: 'span',
          productTitle: 'h3',
          productSubtitle: 'h4',
          productText: 'p',
          socialTitle: 'h3',
          socialSubtitle: 'h4',
        },
      },
    },
    // MuiAccordionSummary: {
    //   styleOverrides: {
    //     content: {
    //       flexGrow: 0,
    //     },

    //     root: {
    //       justifyContent: 'flex-start',
    //     },
    //   },
    // },
    // MuiAccordion: {
    //   styleOverrides: {
    //     root: {
    //       boxShadow: 'unset',
    //     },
    //   },
    // },
    MuiContainer: {
      styleOverrides: {
        root: {
          [breakpoints.up('md')]: {
            maxWidth: '100%',
          },
          [breakpoints.up('lg')]: {
            maxWidth: `1280px`,
          },
          // [breakpoints.up('2xl')]: {
          //   maxWidth: `1380px`,
          // },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          [breakpoints.up('md')]: {
            fontSize: pxToRem(11),
          },
          [breakpoints.up('lg')]: {
            fontSize: pxToRem(12),
          },
          [breakpoints.up('3xl')]: {
            fontSize: pxToRem(13),
          },
        },
        html: [
          { '@font-face': EastmanRegular },
          { '@font-face': EastmanMedium },
          { '@font-face': EastmanExtraBold },
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
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider autoHideDuration={3000} />
          <RouterProvider router={router} />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);
