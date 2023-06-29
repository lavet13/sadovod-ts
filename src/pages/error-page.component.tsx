import { Box, Container, Stack, Typography } from '@mui/material';
import { Link, useRouteError } from 'react-router-dom';
import GenericButtonComponent from '../components/button/button.component';

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error({ error });

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth='md'>
        <Stack
          justifyContent='center'
          alignItems='center'
          textAlign='center'
          spacing={2}
        >
          <Typography variant='h1'>Упс!</Typography>
          <Typography variant='h5'>
            {error.statusText || error.message}
          </Typography>
          <GenericButtonComponent to='/' component={Link} variant='contained'>
            Вернуться назад
          </GenericButtonComponent>
        </Stack>
      </Container>
    </Box>
  );
};

export default ErrorPage;
