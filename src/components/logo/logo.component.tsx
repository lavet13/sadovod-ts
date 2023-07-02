import { FC } from 'react';
import { ButtonProps, Stack, Typography } from '@mui/material';
import { LogoSVG } from './logo.styles';
import { NavLink } from 'react-router-dom';
import GenericButtonComponent from '../button/button.component';
import { PATHS } from '../../pages';

type LogoProps = ButtonProps<any, { component?: any }>;

const Logo: FC<LogoProps> = props => {
  return (
    <GenericButtonComponent
      to={PATHS.HOME_PAGE}
      component={NavLink}
      focusRipple
      variant='logo-btn'
      {...props}
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
