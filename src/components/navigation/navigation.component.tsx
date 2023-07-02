import { NavigationBackground } from './navigation.styles';
import Grid from '@mui/material/Unstable_Grid2';
import { ButtonGroup, Container, Stack } from '@mui/material';
import Logo from '../logo/logo.component';
import { NavLink } from 'react-router-dom';
import GenericButtonComponent from '../button/button.component';
import { PATHS } from '../../pages';

const Navigation = () => {
  return (
    <NavigationBackground>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid xs container>
            <Stack direction='row' spacing={1}>
              <Logo />
            </Stack>
          </Grid>
          <Grid xs={8} container justifyContent='end'>
            <ButtonGroup aria-label='large button group'>
              <GenericButtonComponent
                to={PATHS.HOME_PAGE}
                component={NavLink}
                variant='nav-button'
              >
                Главная
              </GenericButtonComponent>
              <GenericButtonComponent
                to={PATHS.DELIVERY_PAGE}
                component={NavLink}
                variant='nav-button'
              >
                Оплата и доставка
              </GenericButtonComponent>
              <GenericButtonComponent
                to={PATHS.SIGN_IN_PAGE}
                component={NavLink}
                variant='nav-button'
              >
                Вход
              </GenericButtonComponent>
              <GenericButtonComponent
                to={PATHS.CATALOGS_PAGE}
                component={NavLink}
                variant='nav-button-contained'
                color='secondary'
                disableElevation
              >
                Каталог
              </GenericButtonComponent>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Container>
    </NavigationBackground>
  );
};

export default Navigation;
