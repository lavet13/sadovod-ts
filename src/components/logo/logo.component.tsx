import { Stack, Typography } from '@mui/material';
import { LogoSVG } from './logo.styles';
import { NavLink } from 'react-router-dom';
import GenericButtonComponent from '../button/button.component';

const Logo = () => {
  return (
    <GenericButtonComponent
      to={'/'}
      component={NavLink}
      focusRipple
      variant='logo-btn'
    >
      <LogoSVG />
      <Stack>
        <Typography color='secondary' variant='logoText1'>
          Садовод
        </Typography>
        <Typography
          variant='logoText2'
          color='primary'
          sx={{
            textTransform: 'uppercase',
            textAlign: 'start',
          }}
        >
          Online
        </Typography>
      </Stack>
    </GenericButtonComponent>
  );
};

export default Logo;
