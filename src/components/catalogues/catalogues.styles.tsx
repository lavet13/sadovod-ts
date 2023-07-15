import { Box, alpha, styled } from '@mui/material';
import { Swiper } from 'swiper/react';
import { maxHeight, minHeight } from '../hero/hero.styles';

export const SwiperStyled = styled(Swiper)(({ theme }) => ({
  height: theme.typography.pxToRem(450),
  borderRadius: theme.shape.md,

  '--swiper-theme-color': theme.palette.primary.main,
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.common.white,
}));

export const CataloguesWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'center',
  background: 'transparent',

  [`@media screen and (max-height: ${minHeight}px)`]: {
    height: `${minHeight}px`,
  },

  [`@media screen and (min-height: ${maxHeight}px)`]: {
    height: `${maxHeight}px`,
  },
}));

export const SwiperPagination = styled(Box)(({ theme }) => ({
  '--swiper-theme-color': theme.palette.primary.main,

  '--swiper-pagination-bullet-inactive-color': 'transparent',
  '--swiper-pagination-bullet-inactive-opacity': '1',
  '--swiper-pagination-bullet-size': '16px',
  '--swiper-pagination-bullet-horizontal-gap': '6px',

  display: 'flex',
  paddingLeft: 45,
  alignItems: 'flex-end',

  left: 0,
  transform: 'translate(0)!important',
  bottom: 'initial!important',

  '& .swiper-pagination-bullet': {
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));
