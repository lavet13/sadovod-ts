import ReactDOM from 'react-dom/client';
import App from './app/App';
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

import { ThemeProvider, createTheme, lighten } from '@mui/material/styles';

import RalewayExtraLightTTF from './assets/fonts/Raleway/Raleway-ExtraLight.ttf';
import RalewayLightTTF from './assets/fonts/Raleway/Raleway-Light.ttf';
import RalewayRegularTTF from './assets/fonts/Raleway/Raleway-Regular.ttf';
import RalewayMediumTTF from './assets/fonts/Raleway/Raleway-Medium.ttf';
import RalewaySemiBoldTTF from './assets/fonts/Raleway/Raleway-SemiBold.ttf';
import RalewayBoldTTF from './assets/fonts/Raleway/Raleway-Bold.ttf';
import RalewayExtraBoldTTF from './assets/fonts/Raleway/Raleway-ExtraBold.ttf';
import RalewayBlackTTF from './assets/fonts/Raleway/Raleway-Black.ttf';
import React from 'react';
import ErrorPage from './pages/error-page.component';

import { PAGES, PAGES_COMPONENTS } from './pages';

import { Provider } from 'react-redux';
import { store } from './app/store';
import MyAdminPage from './pages/my-admin/my-admin-page.component';
import MyAdminNav from './pages/my-admin/my-admin-nav.component';
import MyAdminGoodsList from './pages/my-admin/my-admin-goods-list.component';
import MyAdminEditGoodItem from './pages/my-admin/my-admin-goods-edit-item.component';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/virtual';
import 'swiper/css/effect-coverflow';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} errorElement={<ErrorPage />}>
        <Route errorElement={<ErrorPage />}>
          {PAGES.map(({ path }) => (
            <Route key={path} path={path} element={PAGES_COMPONENTS[path]} />
          ))}
        </Route>
      </Route>
      <Route
        path='/my-admin'
        element={<MyAdminPage />}
        errorElement={<ErrorPage />}
      >
        <Route errorElement={<ErrorPage />}>
          <Route index element={<MyAdminNav />} />
          <Route path='goods' element={<MyAdminGoodsList />} />
          <Route path='goods/:goodId' element={<MyAdminEditGoodItem />} />
        </Route>
      </Route>
    </>
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
        fontFamily: 'Raleway',
        variantMapping: {
          logoText1: 'span',
          logoText2: 'span',
          swiperTitle: 'p',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          [breakpoints.up('md')]: {
            maxWidth: '100%',
          },
          [breakpoints.up('lg')]: {
            maxWidth: `${breakpoints.values.xl}px`,
          },
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
          [breakpoints.up('xl')]: {
            fontSize: pxToRem(11),
          },
          [breakpoints.up('3xl')]: {
            fontSize: pxToRem(13),
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
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);
