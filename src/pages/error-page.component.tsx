import { Box, Container, Stack, Typography } from '@mui/material';
import { isRouteErrorResponse, useNavigate } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';
import { Button } from '@mui/material';
import { useCallback } from 'react';
import { isError, isErrorResponse } from '../features/goods/goods-slice';

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log({ error });

  const handleNavigateBackTo = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  let errorMessage = '';

  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText;
  } else if (isErrorResponse(error)) {
    errorMessage = error.errorMessage;
  } else if (isError(error)) {
    errorMessage = error.message;
  }

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
          <Typography variant='h5'>{errorMessage}</Typography>
          <Button
            onClick={handleNavigateBackTo}
            variant='long-btn'
            color='primary'
          >
            Вернуться назад
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default ErrorPage;
