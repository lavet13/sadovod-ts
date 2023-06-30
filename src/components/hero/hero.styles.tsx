import { alpha, styled } from '@mui/material/styles';

import Grid, { Grid2Props } from '@mui/material/Unstable_Grid2';

const navigationOffset = 50;
const maxHeight = 850;

export const ClipPathGreenBackground = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: `calc(100vh - ${navigationOffset}px)`,
  backgroundColor: alpha(theme.palette.primary.main, 0.9),
  clipPath: 'polygon(0 60%, 100% 50%, 100% 100%, 0 100%)',
  zIndex: -100,

  [`@media screen and (max-height: 700px)`]: {
    clipPath: 'polygon(0 420px, 100% 320px, 100% 700px, 0 700px)',
    height: '700px',
  },
  [`@media screen and (min-height: ${maxHeight}px)`]: {
    height: `${maxHeight}px`,
    clipPath: `polygon(0 420px, 100% 320px, 100% ${maxHeight}px, 0 ${maxHeight}px)`,
  },
}));

export const Image = styled('img')(({ theme }) => ({
  display: 'block',
  position: 'absolute',
  width: '200%',
  bottom: 0,
  left: '50%',
  transform: `translateX(-50%)`,
  [`${theme.breakpoints.up('lg')} and (min-height: ${maxHeight}px)`]: {
    left: '55%',
    transform: `translateX(-55%)`,
    width: '225%',
  },
}));

export const GridContainer = styled(Grid)<Grid2Props>({
  height: `calc(100vh - ${navigationOffset}px)`,

  [`@media screen and (max-height: 700px)`]: {
    height: '700px',
  },

  [`@media screen and (min-height: ${maxHeight}px)`]: {
    height: `${maxHeight}px`,
  },
});
