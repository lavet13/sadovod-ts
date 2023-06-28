import { FC } from 'react';
import { Button, ButtonProps, Divider } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

import WomanWithBaggages from '../../assets/images/womanWithBaggages.png';

const navigationOffset = 95;

export const HeroBackground = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  minHeight: `calc(100vh - ${navigationOffset}px)`,
  [theme.breakpoints.down('xl')]: {
    background: `url(${WomanWithBaggages}) -30rem 100% / 100rem no-repeat`,
  },
  [theme.breakpoints.down('lg')]: {
    background: `url(${WomanWithBaggages}) -35rem 100% / 92rem no-repeat`,
  },
  [theme.breakpoints.down('md')]: {
    background: 'none',
  },
  [`@media screen and ((max-height: 1030px) and (min-width: ${theme.breakpoints.values.md}px))`]:
    {
      background: `url(${WomanWithBaggages}) -30rem 19% / cover no-repeat`,
    },
  background: `url(${WomanWithBaggages}) -30rem 19% / cover no-repeat`,
}));

export const ClipPathGreenBackground = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: `calc(100vh - ${navigationOffset}px)`,
  backgroundColor: alpha(theme.palette.primary.main, 0.9),
  clipPath: 'polygon(0 60%, 100% 50%, 100% 100%, 0 100%)',
  zIndex: -100,

  [`@media screen and ((max-height: 700px) or (max-width: ${theme.breakpoints.values.md}px))`]:
    {
      clipPath: 'polygon(0 320px, 100% 320px, 100% 100%, 0 100%)',
    },
}));

export const PlaceholderForImage = styled('div')({
  height: `calc(100vh - ${navigationOffset}px)`,
  width: '100%',
});

export const HeroDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  borderWidth: 2,
  marginBottom: 2,

  [theme.breakpoints.down('xl')]: {
    width: '450px',
    alignSelf: 'end',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
    alignSelf: 'center',
  },
}));

export const TelephoneButton = <C extends React.ElementType>(
  props: ButtonProps<C, { component?: C }>
) => {
  return (
    <Button
      {...props}
      sx={{
        px: 2,
        borderRadius: '3px',
      }}
    >
      {props.children}
    </Button>
  );
};

export const OrderButton = <C extends React.ElementType>(
  props: ButtonProps<C, { component?: C }>
) => {
  return (
    <Button
      {...props}
      sx={theme => ({
        px: 4,
        borderRadius: `3px`,
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('md')]: {
          fontSize: 'clamp(1rem, 0.4vw + 1rem, 1.2rem) !important',
        },
      })}
    >
      {props.children}
    </Button>
  );
};
