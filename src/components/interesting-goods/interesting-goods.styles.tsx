import { Box, IconButton, alpha, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Swiper } from 'swiper/react';

export const minHeight = 1700;

export const WaveClipPathBackground = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.85),

  clipPath: `polygon(100% 100%, 0% 100% , 0.00% 7.32%, 1.00% 7.39%, 2.00% 7.45%, 3.00% 7.50%, 4.00% 7.55%, 5.00% 7.59%, 6.00% 7.62%, 7.00% 7.63%, 8.00% 7.64%, 9.00% 7.65%, 10.00% 7.64%, 11.00% 7.62%, 12.00% 7.60%, 13.00% 7.56%, 14.00% 7.52%, 15.00% 7.47%, 16.00% 7.41%, 17.00% 7.34%, 18.00% 7.27%, 19.00% 7.18%, 20.00% 7.09%, 21.00% 6.99%, 22.00% 6.89%, 23.00% 6.77%, 24.00% 6.65%, 25.00% 6.52%, 26.00% 6.39%, 27.00% 6.25%, 28.00% 6.11%, 29.00% 5.96%, 30.00% 5.81%, 31.00% 5.65%, 32.00% 5.49%, 33.00% 5.32%, 34.00% 5.15%, 35.00% 4.98%, 36.00% 4.81%, 37.00% 4.64%, 38.00% 4.46%, 39.00% 4.28%, 40.00% 4.11%, 41.00% 3.93%, 42.00% 3.75%, 43.00% 3.58%, 44.00% 3.40%, 45.00% 3.23%, 46.00% 3.06%, 47.00% 2.89%, 48.00% 2.72%, 49.00% 2.56%, 50.00% 2.41%, 51.00% 2.25%, 52.00% 2.11%, 53.00% 1.96%, 54.00% 1.82%, 55.00% 1.69%, 56.00% 1.57%, 57.00% 1.45%, 58.00% 1.33%, 59.00% 1.23%, 60.00% 1.13%, 61.00% 1.04%, 62.00% 0.96%, 63.00% 0.88%, 64.00% 0.82%, 65.00% 0.76%, 66.00% 0.71%, 67.00% 0.67%, 68.00% 0.63%, 69.00% 0.61%, 70.00% 0.59%, 71.00% 0.59%, 72.00% 0.59%, 73.00% 0.60%, 74.00% 0.62%, 75.00% 0.65%, 76.00% 0.69%, 77.00% 0.74%, 78.00% 0.79%, 79.00% 0.86%, 80.00% 0.93%, 81.00% 1.01%, 82.00% 1.10%, 83.00% 1.19%, 84.00% 1.30%, 85.00% 1.41%, 86.00% 1.52%, 87.00% 1.65%, 88.00% 1.78%, 89.00% 1.91%, 90.00% 2.05%, 91.00% 2.20%, 92.00% 2.35%, 93.00% 2.51%, 94.00% 2.67%, 95.00% 2.83%, 96.00% 3.00%, 97.00% 3.17%, 98.00% 3.34%, 99.00% 3.51%, 100.00% 3.69%,
    100% 98.01%,99% 98.14%,98% 98.26%,97% 98.38%,96% 98.48%,95% 98.59%,94% 98.68%,93% 98.77%,92% 98.85%,91% 98.92%,90% 98.98%,89% 99.03%,88% 99.08%,87% 99.12%,86% 99.14%,85% 99.16%,84% 99.17%,83% 99.18%,82% 99.17%,81% 99.15%,80% 99.13%,79% 99.09%,78% 99.05%,77% 99%,76% 98.94%,75% 98.87%,74% 98.8%,73% 98.71%,72% 98.62%,71% 98.52%,70% 98.41%,69% 98.3%,68% 98.18%,67% 98.05%,66% 97.92%,65% 97.78%,64% 97.64%,63% 97.49%,62% 97.33%,61% 97.18%,60% 97.01%,59% 96.85%,58% 96.68%,57% 96.51%,56% 96.34%,55% 96.16%,54% 95.99%,53% 95.81%,52% 95.63%,51% 95.45%,50% 95.28%,49% 95.1%,48% 94.93%,47% 94.76%,46% 94.58%,45% 94.42%,44% 94.25%,43% 94.09%,42% 93.93%,41% 93.78%,40% 93.63%,39% 93.49%,38% 93.35%,37% 93.22%,36% 93.09%,35% 92.98%,34% 92.86%,33% 92.76%,32% 92.66%,31% 92.57%,30% 92.49%,29% 92.41%,28% 92.34%,27% 92.29%,26% 92.24%,25% 92.19%,24% 92.16%,23% 92.14%,22% 92.12%,21% 92.12%,20% 92.12%,19% 92.13%,18% 92.15%,17% 92.18%,16% 92.22%,15% 92.27%,14% 92.32%,13% 92.39%,12% 92.46%,11% 92.54%,10% 92.63%,9% 92.72%,8% 92.83%,7% 92.94%,6% 93.05%,5% 93.18%,4% 93.31%,3% 93.44%,2% 93.58%,1% 93.73%,0% 93.88%, 0 100%
  )`,

  width: '100%',
  minHeight: `${minHeight}px`,
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
  flexBasis: '100%',
}));

export const SwiperStyled = styled(Swiper)(({ theme }) => ({
  maxWidth: '1220px',
  height: theme.typography.pxToRem(400),

  '--swiper-theme-color': theme.palette.secondary.main,

  [theme.breakpoints.down('xl')]: {
    maxWidth: 'calc(100vw - 68px)',
  },

  [theme.breakpoints.down('md')]: {
    height: theme.typography.pxToRem(200),
    maxWidth: 'calc(100vw - 38px)',
  },
  [theme.breakpoints.down('sm')]: {
    height: theme.typography.pxToRem(200),
    maxWidth: 'calc(100vw - 38px)',
  },
}));

export const SwiperPagination = styled(Box)(({ theme }) => ({
  '--swiper-pagination-color': theme.palette.secondary.main,
  '--swiper-pagination-bullet-inactive-color': 'transparent',
  '--swiper-pagination-bullet-inactive-opacity': '1',
  '--swiper-pagination-bullet-horizontal-gap': '6px',
  '--swiper-pagination-bullet-width': '1.5rem',
  '--swiper-pagination-bullet-height': '1.5rem',

  width: '100%!important',

  display: 'flex',
  alignItems: 'center',

  left: 0,
  transform: 'translate(0)!important',
  bottom: 'initial!important',

  '& .swiper-pagination-bullets-dynamic': {
    overflow: 'hidden',
  },

  '& .swiper-pagination-bullet': {
    border: `1px solid ${theme.palette.common.white}`,
  },
  '& .swiper-pagination-bullet-active': {
    border: `1px solid ${theme.palette.secondary.main}`,
  },
}));

export const SwiperButton = styled(IconButton)(({ theme }) => ({
  alignSelf: 'center',

  '& svg': {
    width: '16px',
    height: '15px',
  },
}));
