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
  clipPath: `polygon(0 0, 100% 40px, 100% 300px, 0 260px)`,

  position: 'absolute',
  width: '100%',
  minHeight: `${minHeight}px`,
  zIndex: -100,
}));

export const VKIcon = styled(VKSVG)(({ theme }) => ({
  flexBasis: '80px',
  flexShrink: 0,

  width: theme.typography.pxToRem(88),
  height: theme.typography.pxToRem(50),
}));

export const OKIcon = styled(OKSVG)(({ theme }) => ({
  flexBasis: '80px',
  flexShrink: 0,

  width: theme.typography.pxToRem(44),
  height: theme.typography.pxToRem(77),
}));
