import { Button, styled } from '@mui/material';

export const HeaderButton = styled(Button)(({ theme }) => ({
  alignSelf: 'stretch',
  lineHeight: 1,
  px: { sm: theme.spacing(4), xs: theme.spacing(2) },
  py: 0,
  fontSize: '10px',
  [theme.breakpoints.down('md')]: {
    fontSize: 'clamp(0.8rem, 0.8vw + 0.8rem, 1.2rem)',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 'clamp(0.8rem, 0.8vw + 0.8rem, 1rem)',
  },
}));
