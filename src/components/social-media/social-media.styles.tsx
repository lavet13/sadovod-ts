import { alpha, styled } from '@mui/material';

import { ReactComponent as VKSVG } from '../../assets/icons/vk.svg';
import { ReactComponent as OKSVG } from '../../assets/icons/ok.svg';

const minHeight = 350;

export const SocialMediaWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  minHeight: '1000px',
});

export const ClipPathGreenBackground = styled('div')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.85),
  clipPath: `polygon(0 30px, 100% 60px, 100% 320px, 0 290px)`,

  position: 'absolute',
  width: '100%',
  minHeight: `${minHeight}px`,
  zIndex: -100,
}));

export const VKIcon = styled(VKSVG)(({ theme }) => ({
  flexBasis: theme.typography.pxToRem(88),
  flexShrink: 0,

  width: theme.typography.pxToRem(88),
  height: theme.typography.pxToRem(50),
  fill: theme.palette.primary.main,
}));

export const OKIcon = styled(OKSVG)(({ theme }) => ({
  flexBasis: theme.typography.pxToRem(88),
  flexShrink: 0,

  width: theme.typography.pxToRem(44),
  height: theme.typography.pxToRem(77),
  fill: theme.palette.primary.main,
}));
