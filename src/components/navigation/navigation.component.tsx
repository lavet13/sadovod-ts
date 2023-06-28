import { NavigationBackground } from './navigation.styles';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, ButtonGroup, Container, Stack } from '@mui/material';
import Logo from '../logo/logo.component';

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
              <Button variant='nav-button' color='secondary'>
                Главная
              </Button>
              <Button variant='text' color='secondary'>
                Оплата и доставка
              </Button>
              <Button variant='text' color='secondary'>
                Вход
              </Button>
              <Button
                variant='nav-button-contained'
                color='secondary'
                disableElevation
              >
                Каталог
              </Button>
              <Button variant='contained' color='secondary'>
                Каталог
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Container>
    </NavigationBackground>
  );
};

export default Navigation;
