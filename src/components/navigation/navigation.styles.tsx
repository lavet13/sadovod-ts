import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

import Shopping1 from '../../assets/icons/luggages.svg';
import Shopping2 from '../../assets/icons/luggages2.svg';

export const NavigationBackground = styled(Box)(({ theme }) => ({
  background: `url(${Shopping1}) 5% 5px / 100px no-repeat, url(${Shopping2}) 95% 5px / 100px no-repeat`,
  [theme.breakpoints.down('lg')]: {
    background: `url(${Shopping2}) 99% 10px / 100px no-repeat`,
  },
  [theme.breakpoints.down('md')]: {
    background: 'none',
  },
}));
