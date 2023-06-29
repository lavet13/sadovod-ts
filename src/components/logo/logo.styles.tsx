import { styled } from '@mui/material';
import { ReactComponent as LogoSVGSVG } from '../../assets/icons/Logo.svg';

export const LogoSVG = styled(LogoSVGSVG)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: theme.typography.pxToRem(40),
    height: theme.typography.pxToRem(40),
  },
  [theme.breakpoints.up('sm')]: {
    width: theme.typography.pxToRem(60),
    height: theme.typography.pxToRem(60),
  },
  [theme.breakpoints.up('md')]: {
    width: theme.typography.pxToRem(70),
    height: theme.typography.pxToRem(70),
  },
}));
