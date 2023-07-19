import {
  Button,
  ButtonProps,
  Container,
  ContainerProps,
  alpha,
  styled,
} from '@mui/material';

import { ReactComponent as GooglePlayIconSVG } from '../../assets/icons/google-play-icon.svg';
import { ReactComponent as BucketIconSVG } from '../../assets/icons/bucket.svg';
import { ReactComponent as TelIconSVG } from '../../assets/icons/tel-icon.svg';
import { ReactComponent as VKIconSVG } from '../../assets/icons/vk.svg';
import { ReactComponent as OKIconSVG } from '../../assets/icons/ok.svg';
import { ReactComponent as CalcIconSVG } from '../../assets/icons/calc-icon.svg';
import { ReactComponent as DiscountCardSVG } from '../../assets/icons/discount-card.svg';

import BackgroundURL from '../../assets/images/female-friends-out-shopping-together.png';

export const FooterBackground = styled('div')(({ theme }) => ({
  background: `linear-gradient(to right bottom, ${alpha(
    theme.palette.secondary.main,
    0.9
  )}, ${alpha(
    theme.palette.secondary.main,
    0.8
  )}), url(${BackgroundURL}) bottom center/cover no-repeat`,

  position: 'relative',
  marginTop: 'auto',
  width: '100%',
  minHeight: theme.typography.pxToRem(250),
  zIndex: 100,

  [theme.breakpoints.down('md')]: {
    minHeight: theme.typography.pxToRem(370),
  },
}));

export const FooterContainer = styled((props: ContainerProps) => (
  <Container {...props} />
))(({ theme }) => ({
  height: theme.typography.pxToRem(250),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  [theme.breakpoints.down('md')]: {
    minHeight: theme.typography.pxToRem(370),
  },
}));

export const FooterButton = styled((props: ButtonProps) => (
  <Button variant='footer-link' {...props} />
))(({ theme }) => ({
  '& > .MuiButton-startIcon': {
    flexBasis: '25px',
    flexShrink: 0,
    flexGrow: 1,

    [theme.breakpoints.down('sm')]: {
      flexBasis: '12px',
    },
  },
}));

export const GooglePlayIcon = styled(GooglePlayIconSVG)(({ theme }) => ({
  width: theme.typography.pxToRem(27),
  height: theme.typography.pxToRem(23),
  [theme.breakpoints.down('md')]: {
    width: theme.typography.pxToRem(20),
    height: theme.typography.pxToRem(20),
  },

  [theme.breakpoints.down('sm')]: {
    width: theme.typography.pxToRem(15),
    height: theme.typography.pxToRem(15),
  },
}));

export const BucketIcon = styled(BucketIconSVG)(({ theme }) => ({
  width: theme.typography.pxToRem(24),
  height: theme.typography.pxToRem(24),

  [theme.breakpoints.down('md')]: {
    width: theme.typography.pxToRem(20),
    height: theme.typography.pxToRem(20),
  },

  [theme.breakpoints.down('sm')]: {
    width: theme.typography.pxToRem(15),
    height: theme.typography.pxToRem(15),
  },
}));

export const CalcIcon = styled(CalcIconSVG)(({ theme }) => ({
  width: theme.typography.pxToRem(27),
  height: theme.typography.pxToRem(24),
  fill: theme.palette.common.white,

  [theme.breakpoints.down('md')]: {
    width: theme.typography.pxToRem(20),
    height: theme.typography.pxToRem(20),
  },

  [theme.breakpoints.down('sm')]: {
    width: theme.typography.pxToRem(15),
    height: theme.typography.pxToRem(15),
  },
}));

export const DiscountCardIcon = styled(DiscountCardSVG)(({ theme }) => ({
  width: theme.typography.pxToRem(30),
  height: theme.typography.pxToRem(20),
  fill: theme.palette.common.white,

  [theme.breakpoints.down('md')]: {
    width: theme.typography.pxToRem(21),
    height: theme.typography.pxToRem(20),
  },

  [theme.breakpoints.down('sm')]: {
    width: theme.typography.pxToRem(15),
    height: theme.typography.pxToRem(15),
  },
}));

export const TelIcon = styled(TelIconSVG)(({ theme }) => ({
  width: theme.typography.pxToRem(24),
  height: theme.typography.pxToRem(24),

  [theme.breakpoints.down('md')]: {
    width: theme.typography.pxToRem(25),
    height: theme.typography.pxToRem(17),
  },

  [theme.breakpoints.down('sm')]: {
    width: theme.typography.pxToRem(15),
    height: theme.typography.pxToRem(14),
  },
}));

export const VKIcon = styled(VKIconSVG)(({ theme }) => ({
  width: theme.typography.pxToRem(28),
  height: theme.typography.pxToRem(15),
  fill: theme.palette.common.white,

  [theme.breakpoints.down('md')]: {
    width: theme.typography.pxToRem(25),
    height: theme.typography.pxToRem(13),
  },

  [theme.breakpoints.down('sm')]: {
    width: theme.typography.pxToRem(16),
    height: theme.typography.pxToRem(15),
  },
}));

export const OKIcon = styled(OKIconSVG)(({ theme }) => ({
  width: theme.typography.pxToRem(28),
  height: theme.typography.pxToRem(24),
  fill: theme.palette.common.white,

  [theme.breakpoints.down('md')]: {
    width: theme.typography.pxToRem(25),
    height: theme.typography.pxToRem(24),
  },

  [theme.breakpoints.down('sm')]: {
    width: theme.typography.pxToRem(17),
    height: theme.typography.pxToRem(17),
  },
}));
