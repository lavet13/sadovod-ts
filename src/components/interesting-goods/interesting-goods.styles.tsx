import {
  Box,
  Container as MuiContainer,
  ContainerProps,
  IconButton,
  alpha,
  styled,
  StackProps,
  Stack as MuiStack,
  CardContent,
} from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2';

import { Swiper } from 'swiper/react';
import { GenericCardActionArea } from '../button/button.component';
import { isMobile } from 'react-device-detect';

const minHeight = 1700;

export const WaveClipPathBackground = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.85),

  clipPath: `polygon(100% 100%, 0% 100% , 0.00% 7.32%, 1.00% 7.39%, 2.00% 7.45%, 3.00% 7.50%, 4.00% 7.55%, 5.00% 7.59%, 6.00% 7.62%, 7.00% 7.63%, 8.00% 7.64%, 9.00% 7.65%, 10.00% 7.64%, 11.00% 7.62%, 12.00% 7.60%, 13.00% 7.56%, 14.00% 7.52%, 15.00% 7.47%, 16.00% 7.41%, 17.00% 7.34%, 18.00% 7.27%, 19.00% 7.18%, 20.00% 7.09%, 21.00% 6.99%, 22.00% 6.89%, 23.00% 6.77%, 24.00% 6.65%, 25.00% 6.52%, 26.00% 6.39%, 27.00% 6.25%, 28.00% 6.11%, 29.00% 5.96%, 30.00% 5.81%, 31.00% 5.65%, 32.00% 5.49%, 33.00% 5.32%, 34.00% 5.15%, 35.00% 4.98%, 36.00% 4.81%, 37.00% 4.64%, 38.00% 4.46%, 39.00% 4.28%, 40.00% 4.11%, 41.00% 3.93%, 42.00% 3.75%, 43.00% 3.58%, 44.00% 3.40%, 45.00% 3.23%, 46.00% 3.06%, 47.00% 2.89%, 48.00% 2.72%, 49.00% 2.56%, 50.00% 2.41%, 51.00% 2.25%, 52.00% 2.11%, 53.00% 1.96%, 54.00% 1.82%, 55.00% 1.69%, 56.00% 1.57%, 57.00% 1.45%, 58.00% 1.33%, 59.00% 1.23%, 60.00% 1.13%, 61.00% 1.04%, 62.00% 0.96%, 63.00% 0.88%, 64.00% 0.82%, 65.00% 0.76%, 66.00% 0.71%, 67.00% 0.67%, 68.00% 0.63%, 69.00% 0.61%, 70.00% 0.59%, 71.00% 0.59%, 72.00% 0.59%, 73.00% 0.60%, 74.00% 0.62%, 75.00% 0.65%, 76.00% 0.69%, 77.00% 0.74%, 78.00% 0.79%, 79.00% 0.86%, 80.00% 0.93%, 81.00% 1.01%, 82.00% 1.10%, 83.00% 1.19%, 84.00% 1.30%, 85.00% 1.41%, 86.00% 1.52%, 87.00% 1.65%, 88.00% 1.78%, 89.00% 1.91%, 90.00% 2.05%, 91.00% 2.20%, 92.00% 2.35%, 93.00% 2.51%, 94.00% 2.67%, 95.00% 2.83%, 96.00% 3.00%, 97.00% 3.17%, 98.00% 3.34%, 99.00% 3.51%, 100.00% 3.69%,
    100% 98.01%,99% 98.14%,98% 98.26%,97% 98.38%,96% 98.48%,95% 98.59%,94% 98.68%,93% 98.77%,92% 98.85%,91% 98.92%,90% 98.98%,89% 99.03%,88% 99.08%,87% 99.12%,86% 99.14%,85% 99.16%,84% 99.17%,83% 99.18%,82% 99.17%,81% 99.15%,80% 99.13%,79% 99.09%,78% 99.05%,77% 99%,76% 98.94%,75% 98.87%,74% 98.8%,73% 98.71%,72% 98.62%,71% 98.52%,70% 98.41%,69% 98.3%,68% 98.18%,67% 98.05%,66% 97.92%,65% 97.78%,64% 97.64%,63% 97.49%,62% 97.33%,61% 97.18%,60% 97.01%,59% 96.85%,58% 96.68%,57% 96.51%,56% 96.34%,55% 96.16%,54% 95.99%,53% 95.81%,52% 95.63%,51% 95.45%,50% 95.28%,49% 95.1%,48% 94.93%,47% 94.76%,46% 94.58%,45% 94.42%,44% 94.25%,43% 94.09%,42% 93.93%,41% 93.78%,40% 93.63%,39% 93.49%,38% 93.35%,37% 93.22%,36% 93.09%,35% 92.98%,34% 92.86%,33% 92.76%,32% 92.66%,31% 92.57%,30% 92.49%,29% 92.41%,28% 92.34%,27% 92.29%,26% 92.24%,25% 92.19%,24% 92.16%,23% 92.14%,22% 92.12%,21% 92.12%,20% 92.12%,19% 92.13%,18% 92.15%,17% 92.18%,16% 92.22%,15% 92.27%,14% 92.32%,13% 92.39%,12% 92.46%,11% 92.54%,10% 92.63%,9% 92.72%,8% 92.83%,7% 92.94%,6% 93.05%,5% 93.18%,4% 93.31%,3% 93.44%,2% 93.58%,1% 93.73%,0% 93.88%, 0 100%
  )`,

  width: '100%',

  [theme.breakpoints.down('md')]: {
    clipPath: `polygon(100% 100%, 0% 98.5%, 0.00% 3.29%, 1.00% 3.28%, 2.00% 3.28%, 3.00% 3.28%, 4.00% 3.27%, 5.00% 3.26%, 6.00% 3.25%, 7.00% 3.24%, 8.00% 3.22%, 9.00% 3.20%, 10.00% 3.19%, 11.00% 3.16%, 12.00% 3.14%, 13.00% 3.12%, 14.00% 3.09%, 15.00% 3.06%, 16.00% 3.03%, 17.00% 3.00%, 18.00% 2.97%, 19.00% 2.93%, 20.00% 2.90%, 21.00% 2.86%, 22.00% 2.82%, 23.00% 2.78%, 24.00% 2.74%, 25.00% 2.70%, 26.00% 2.65%, 27.00% 2.61%, 28.00% 2.56%, 29.00% 2.51%, 30.00% 2.47%, 31.00% 2.42%, 32.00% 2.37%, 33.00% 2.32%, 34.00% 2.26%, 35.00% 2.21%, 36.00% 2.16%, 37.00% 2.11%, 38.00% 2.05%, 39.00% 2.00%, 40.00% 1.95%, 41.00% 1.89%, 42.00% 1.84%, 43.00% 1.79%, 44.00% 1.73%, 45.00% 1.68%, 46.00% 1.62%, 47.00% 1.57%, 48.00% 1.52%, 49.00% 1.47%, 50.00% 1.42%, 51.00% 1.36%, 52.00% 1.31%, 53.00% 1.27%, 54.00% 1.22%, 55.00% 1.17%, 56.00% 1.12%, 57.00% 1.08%, 58.00% 1.03%, 59.00% 0.99%, 60.00% 0.95%, 61.00% 0.91%, 62.00% 0.87%, 63.00% 0.83%, 64.00% 0.79%, 65.00% 0.76%, 66.00% 0.72%, 67.00% 0.69%, 68.00% 0.66%, 69.00% 0.63%, 70.00% 0.61%, 71.00% 0.58%, 72.00% 0.56%, 73.00% 0.54%, 74.00% 0.52%, 75.00% 0.50%, 76.00% 0.48%, 77.00% 0.47%, 78.00% 0.46%, 79.00% 0.45%, 80.00% 0.44%, 81.00% 0.43%, 82.00% 0.43%, 83.00% 0.43%, 84.00% 0.43%, 85.00% 0.43%, 86.00% 0.44%, 87.00% 0.44%, 88.00% 0.45%, 89.00% 0.46%, 90.00% 0.47%, 91.00% 0.49%, 92.00% 0.50%, 93.00% 0.52%, 94.00% 0.54%, 95.00% 0.56%, 96.00% 0.59%, 97.00% 0.61%, 98.00% 0.64%, 99.00% 0.67%, 100.00% 0.70%)
    `,
  },
}));

export const Container = styled((props: ContainerProps) => (
  <MuiContainer {...props} />
))(({ theme }) => ({
  minHeight: `${minHeight}px`,

  [theme.breakpoints.down('md')]: {
    minHeight: `${minHeight - 120}px`,
  },

  [theme.breakpoints.down('sm')]: {
    minHeight: `${minHeight - 450}px`,
  },
}));

export const InterestingGoodsWrapper = styled((props: StackProps) => (
  <MuiStack
    direction='row'
    flexWrap={'wrap'}
    alignContent={'space-evenly'}
    {...props}
  />
))(({ theme }) => ({
  minHeight: `${minHeight}px`,

  [theme.breakpoints.down('md')]: {
    minHeight: `${minHeight - 220}px`,
  },

  [theme.breakpoints.down('sm')]: {
    minHeight: `${minHeight - 550}px`,
  },
}));

export const GridContainer = styled(Grid)({
  flexBasis: '100%',
});

export const SwiperStyled = styled(Swiper)(({ theme }) => ({
  maxWidth: '1220px',
  height: theme.typography.pxToRem(400),

  '--swiper-theme-color': theme.palette.secondary.main,

  [theme.breakpoints.down('xl')]: {
    maxWidth: 'calc(100vw - 68px)',
  },

  [theme.breakpoints.down('md')]: {
    height: theme.typography.pxToRem(200),
    maxWidth: 'calc(100vw - 64px)',
  },
  [theme.breakpoints.down('sm')]: {
    height: theme.typography.pxToRem(200),
    maxWidth: 'calc(100vw - 58px)',
  },
}));

export const SwiperPagination = styled(Box)(({ theme }) => ({
  '--swiper-pagination-color': theme.palette.secondary.main,
  '--swiper-pagination-bullet-inactive-color': 'transparent',
  '--swiper-pagination-bullet-inactive-opacity': '1',
  '--swiper-pagination-bullet-horizontal-gap': '4px',

  display: 'flex',
  alignItems: 'center',
  width: '200%!important',

  bottom: '50%!important',
  left: '120%!important',
  transform: `translate(-65%, 50%)!important`,
  zIndex: -1,

  '& .swiper-pagination-bullets-dynamic': {
    overflow: 'hidden',
  },

  '& .swiper-pagination-bullet': {
    border: `1px solid ${theme.palette.common.white}`,
    width: '16px!important',
    height: '16px!important',
  },

  '& .swiper-pagination-bullet-active': {
    border: `1px solid ${theme.palette.secondary.main}`,
  },

  [theme.breakpoints.down('lg')]: {
    '& .swiper-pagination-bullet': {
      width: '14px',
      height: '14px',
    },
  },
}));

export const SwiperButton = styled(IconButton)({
  alignSelf: 'center',

  '& svg': {
    width: '16px',
    height: '15px',
  },
});

export const ImageButton = styled(GenericCardActionArea)(({ theme }) => ({
  width: '100%',
  height: '100%',

  '&:hover': {
    backgroundColor: alpha(theme.palette.secondary.main, 0.3),
  },

  '&& .MuiTouchRipple-child': {
    backgroundColor: theme.palette.yellow.contrastText,
  },

  ...(isMobile
    ? { backgroundColor: alpha(theme.palette.secondary.main, 0.3) }
    : {}),

  '&:hover .MuiCardContent-root': {
    opacity: 1,
  },

  transition: theme.transitions.create('background-color'),
}));

export const ImageContent = styled(CardContent)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,

  padding: 0,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',

  ...(isMobile ? { opacity: 1 } : { opacity: 0 }),

  transition: theme.transitions.create('opacity'),
}));
