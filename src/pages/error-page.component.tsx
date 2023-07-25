import { Box, Container, Stack, Typography } from '@mui/material';
import { isRouteErrorResponse, useNavigate } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';
import { Button } from '@mui/material';
import { useCallback } from 'react';
import { useAppDispatch } from '../app/hooks';
import { ErrorResponse } from '../utils/error/error.utils';

const ErrorPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useRouteError() as ErrorResponse;

  const handleNavigateBackTo = useCallback(() => {
    navigate(-1);
  }, [navigate]);

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
            {isRouteErrorResponse(error)
              ? error.error?.message || error.statusText
              : error.errorMessage}
          </Typography>
          <Button
            onClick={handleNavigateBackTo}
            variant='contained'
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
