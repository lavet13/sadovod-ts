import { Stack, Typography } from '@mui/material';
import { LogoSVG } from './logo.styles';
import { NavLink } from 'react-router-dom';
import { GenericButtonBase } from '../button/button.component';

const Logo = () => {
  return (
    <GenericButtonBase to={'/'} component={NavLink} focusRipple>
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
    </GenericButtonBase>
  );
};

export default Logo;
