import { alpha, styled } from '@mui/material';

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
