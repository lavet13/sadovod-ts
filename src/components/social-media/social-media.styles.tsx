import { CardProps, alpha, styled, Card as MuiCard } from '@mui/material';

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

export const Card = styled((props: CardProps) => <MuiCard {...props} />)(
  ({ theme }) =>
    theme.unstable_sx({
      background: '#f4f4f4',
      maxWidth: theme.typography.pxToRem(410),
      borderRadius: 5,
      position: 'relative',
      minHeight: theme.typography.pxToRem(445),
      top: 50,
      mx: 'auto',
      [theme.breakpoints.down('md')]: {
        maxWidth: theme.typography.pxToRem(310),
        minHeight: theme.typography.pxToRem(345),
      },
    })
);

export const VKIcon = styled(VKSVG)(({ theme }) => ({
  flexBasis: theme.typography.pxToRem(88),
  flexShrink: 0,
  alignSelf: 'center',

  width: theme.typography.pxToRem(88),
  height: theme.typography.pxToRem(50),
  fill: theme.palette.primary.main,
  [theme.breakpoints.down('md')]: {
    width: theme.typography.pxToRem(58),
    height: theme.typography.pxToRem(32),
    flexBasis: theme.typography.pxToRem(58),
  },
}));

export const OKIcon = styled(OKSVG)(({ theme }) => ({
  flexBasis: theme.typography.pxToRem(88),
  flexShrink: 0,
  alignSelf: 'center',

  width: theme.typography.pxToRem(44),
  height: theme.typography.pxToRem(77),
  fill: theme.palette.primary.main,
  [theme.breakpoints.down('md')]: {
    width: theme.typography.pxToRem(26),
    height: theme.typography.pxToRem(47),
    flexBasis: theme.typography.pxToRem(58),
  },
}));
