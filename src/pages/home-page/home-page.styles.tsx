import { styled, alpha } from '@mui/material';
import BackgroundImage from '../../assets/images/back-min.png';

export const HomeBackground = styled('div')(({ theme }) => ({
  background: `linear-gradient(to bottom, ${alpha(
    theme.palette.common.white,
    0.9
  )} 92%, ${
    theme.palette.common.white
  } 95% 100%), url(${BackgroundImage}) top center/cover no-repeat`,

  position: 'absolute',
  top: 0,
  zIndex: -100,

  width: '100%',
  objectFit: 'cover',
  minHeight: '3700px',

  [theme.breakpoints.down('md')]: {
    minHeight: '2500px',
  },
}));
