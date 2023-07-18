import { Box, BoxProps, Stack, StackProps, styled } from '@mui/material';
import { Swiper } from 'swiper/react';
import { maxHeight } from '../hero/hero.styles';

export const SwiperStyled = styled(Swiper)(({ theme }) => ({
  height: theme.typography.pxToRem(450),
  borderRadius: theme.shape.md,

  '--swiper-theme-color': theme.palette.primary.main,
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.common.white,
}));

export const SwiperImg = styled(
  (props: BoxProps & { src: string; alt: string }) => (
    <Box component='img' loading='lazy' {...props} />
  )
)(({ theme }) => ({
  display: 'block',
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  aspectRatio: '16 / 5',

  [theme.breakpoints.down('xl')]: {
    height: '100%',
  },
}));

export const SwiperLinearGradient = styled((props: BoxProps) => (
  <Box {...props} />
))({
  position: 'absolute',
  top: 0,
  height: '100%',
  width: '100%',
  background: `linear-gradient(90deg, #fff 25.92%, transparent 50% 100%)`,
});

export const SwiperContent = styled((props: StackProps) => (
  <Stack {...props} />
))(({ theme: { unstable_sx } }) =>
  unstable_sx({
    pl: 5,
    justifyContent: 'center',
    height: '100%',
    maxWidth: '27%',
  })
);

export const CataloguesWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'center',

  background: 'transparent',

  height: `${maxHeight}px`,
}));

export const SwiperPagination = styled(Box)(({ theme }) => ({
  '--swiper-theme-color': theme.palette.primary.main,

  '--swiper-pagination-bullet-inactive-color': 'transparent',
  '--swiper-pagination-bullet-inactive-opacity': '1',
  '--swiper-pagination-bullet-horizontal-gap': '6px',
  '--swiper-pagination-bullet-width': '16px',
  '--swiper-pagination-bullet-height': '16px',
  '--swiper-pagination-bullet-size': '16px',

  display: 'flex',
  paddingLeft: 45,
  alignItems: 'flex-end',

  left: 0,
  transform: 'translate(0)!important',
  bottom: 'initial!important',

  '& .swiper-pagination-bullet': {
    border: `1px solid ${theme.palette.primary.main}`,
  },

  [theme.breakpoints.down('lg')]: {
    '& .swiper-pagination-bullet': {
      width: '12px',
      height: '12px',
    },
  },
}));
