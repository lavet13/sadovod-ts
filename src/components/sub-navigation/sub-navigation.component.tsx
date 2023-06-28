import { Box, Container, Stack } from '@mui/material';
import { SubButton } from './sub-navigation.styles';

const SubNavigation = () => {
  return (
    <Box sx={theme => ({ backgroundColor: theme.palette.primary.main })}>
      <Container>
        <Stack direction='row' justifyContent='center' spacing={5}>
          <SubButton color='white' variant='text'>
            Скидочная карта
          </SubButton>
          <SubButton color='white' variant='text'>
            Калькулятор доставки
          </SubButton>
          <SubButton color='white' variant='text'>
            Мобильное приложение
          </SubButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default SubNavigation;
