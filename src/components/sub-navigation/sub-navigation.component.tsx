import { Box, Container, Stack } from '@mui/material';
import GenericButtonComponent from '../button/button.component';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../pages';

const SubNavigation = () => {
  return (
    <Box sx={theme => ({ backgroundColor: theme.palette.primary.main })}>
      <Container>
        <Stack direction='row' justifyContent='center' spacing={5}>
          <GenericButtonComponent
            to={PATHS.DISCOUNT_PAGE}
            component={NavLink}
            color='white'
            variant='nav-button'
          >
            Скидочная карта
          </GenericButtonComponent>
          <GenericButtonComponent
            to={PATHS.CALCULATOR_PAGE}
            component={NavLink}
            color='white'
            variant='nav-button'
          >
            Калькулятор доставки
          </GenericButtonComponent>
          <GenericButtonComponent
            to={PATHS.MOBILE_PAGE}
            component={NavLink}
            color='white'
            variant='nav-button'
          >
            Мобильное приложение
          </GenericButtonComponent>
        </Stack>
      </Container>
    </Box>
  );
};

export default SubNavigation;
