import { Divider } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

const navigationOffset = 50;
export const minHeight = 800;
export const maxHeight = 850;

export const ClipPathBlackStroke = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: `calc(100vh - ${navigationOffset}px)`,
  backgroundColor: alpha(theme.palette.secondary.main, 0.9),
  clipPath: 'polygon(0 60%, 100% 50%, 100% 50.55%, 0 60.55%)',
  zIndex: 1000,

  [`@media screen and (max-height: ${minHeight}px)`]: {
    clipPath: `polygon(0 420px, 100% 360px, 100% 361px, 0 421px)`,
    height: `${minHeight}px`,
  },
  [`@media screen and (min-height: ${maxHeight}px)`]: {
    height: `${maxHeight}px`,
    clipPath: `polygon(0 420px, 100% 360px, 100% 361px, 0 421px)`,
  },
}));

export const ClipPathGreenBackground = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: `calc(100vh - ${navigationOffset}px)`,
  backgroundColor: alpha(theme.palette.primary.main, 0.9),
  clipPath: 'polygon(0 60%, 100% 50%, 100% 100%, 0 100%)',
  zIndex: 1000,

  [`@media screen and (max-height: ${minHeight}px)`]: {
    clipPath: `polygon(0 420px, 100% 360px, 100% ${minHeight}px, 0 ${minHeight}px)`,
    height: `${minHeight}px`,
  },
  [`@media screen and (min-height: ${maxHeight}px)`]: {
    height: `${maxHeight}px`,
    clipPath: `polygon(0 420px, 100% 360px, 100% ${maxHeight}px, 0 ${maxHeight}px)`,
  },
}));

export const Image = styled('img')(({ theme }) => {
  console.log(theme.breakpoints.between('md', 'lg'));
  return {
    display: 'block',
    position: 'absolute',
    width: '180%',
    bottom: 0,
    left: '70%',
    transform: `translateX(-70%)`,
    [`${theme.breakpoints.up('lg')} and (min-height: ${maxHeight}px)`]: {
      width: '200%',
    },
    [`${theme.breakpoints.up('lg')} and (max-height: ${minHeight}px)`]: {
      width: '160%',
      objectFit: 'cover',
      aspectRatio: '5 / 4',
    },
    [`${theme.breakpoints.between(
      'md',
      'lg'
    )} and (min-height: ${maxHeight}px)`]: {
      width: '170%',
      objectFit: 'cover',
      aspectRatio: '2 / 2',
    },
    [`@media (min-width: ${theme.breakpoints.values.md}px) and (max-width: ${
      theme.breakpoints.values.lg - 200
    }px) and (max-height: ${maxHeight - 1}px)`]: {
      width: '115%',
      left: '90%',
      transform: `translateX(-90%)`,
      objectFit: 'cover',
      aspectRatio: '2 / 3',
    },
    [`@media (min-width: ${
      theme.breakpoints.values.lg - 200
    }px) and (max-width: ${theme.breakpoints.values.lg}px) and (max-height: ${
      maxHeight - 1
    }px)`]: {
      width: '155%',
      left: '80%',
      transform: `translateX(-80%)`,
      objectFit: 'cover',
      aspectRatio: '1 / 1',
    },
  };
});

export const GridContainer = styled(Grid)(({ theme }) => ({
  position: 'relative',
  zIndex: 100000,
  height: `calc(100vh - ${navigationOffset}px)`,

  [`@media screen and (max-height: ${minHeight}px)`]: {
    height: `${minHeight}px`,
  },

  [`@media screen and (min-height: ${maxHeight}px)`]: {
    height: `${maxHeight}px`,
  },
  [`${theme.breakpoints.down('md')} and (max-height: ${minHeight}px)`]: {
    height: `60vh`,
  },
  [`${theme.breakpoints.down('md')} and (min-height: ${minHeight}px)`]: {
    height: `700px`,
  },
  [`${theme.breakpoints.down('md')} and (max-height: 700px)`]: {
    height: `420px`,
  },
}));

export const HeroDivider = styled(Divider)(({ theme }) =>
  theme.unstable_sx({
    borderColor: theme.palette.primary.main,
    borderWidth: { xs: 1, sm: 2 },
    mb: { md: 2, xs: 1 },
    [theme.breakpoints.up('xl')]: {
      width: '410px',
      alignSelf: 'end',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: '408px',
      alignSelf: 'end',
    },
    [theme.breakpoints.down('lg')]: {
      width: '365px',
      alignSelf: 'end',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      alignSelf: 'center',
    },
  })
);
