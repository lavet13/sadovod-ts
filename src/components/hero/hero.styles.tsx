import { Divider } from '@mui/material';
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
