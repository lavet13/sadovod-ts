import {
  CardProps,
  styled,
  Card as MuiCard,
  CardActions as MuiCardActions,
  CardContent as MuiCardContent,
  CardActionsProps,
  CardContentProps,
} from '@mui/material';

import { ReactComponent as VKSVG } from '../../assets/icons/vk.svg';
import { ReactComponent as OKSVG } from '../../assets/icons/ok.svg';

export const Card = styled((props: CardProps) => <MuiCard {...props} />)(
  ({ theme }) =>
    theme.unstable_sx({
      background: '#f4f4f4',
      maxWidth: theme.typography.pxToRem(410),
      borderRadius: 5,
      minHeight: theme.typography.pxToRem(445),
      mx: 'auto',

      [theme.breakpoints.down('md')]: {
        maxWidth: theme.typography.pxToRem(310),
        minHeight: theme.typography.pxToRem(345),
      },

      [theme.breakpoints.down('sm')]: {
        maxWidth: theme.typography.pxToRem(240),
        minHeight: theme.typography.pxToRem(300),
      },
    })
);

export const CardContent = styled((props: CardContentProps) => (
  <MuiCardContent {...props} />
))(({ theme }) => {
  const {
    unstable_sx,
    typography: { pxToRem },
  } = theme;

  return unstable_sx({
    padding: {
      xs: `${pxToRem(20)} ${pxToRem(25)}`,
      sm: `${pxToRem(23)} ${pxToRem(30)}`,
      md: `${pxToRem(23)} ${pxToRem(30)}`,
    },
  });
});

export const CardActions = styled((props: CardActionsProps) => (
  <MuiCardActions disableSpacing {...props} />
))(({ theme }) =>
  theme.unstable_sx({
    alignContent: 'flex-start',
    flexDirection: 'column',

    padding: {
      xs: `${theme.typography.pxToRem(10)} ${theme.typography.pxToRem(20)}`,
      sm: `${theme.typography.pxToRem(30)}`,
      md: `${theme.typography.pxToRem(30)}`,
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

  [theme.breakpoints.down('sm')]: {
    width: theme.typography.pxToRem(45),
    height: theme.typography.pxToRem(24),
    flexBasis: theme.typography.pxToRem(45),
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
    width: theme.typography.pxToRem(13),
    height: theme.typography.pxToRem(47),
    flexBasis: theme.typography.pxToRem(58),
  },
  [theme.breakpoints.down('sm')]: {
    width: theme.typography.pxToRem(13),
    height: theme.typography.pxToRem(35),
    flexBasis: theme.typography.pxToRem(45),
  },
}));
