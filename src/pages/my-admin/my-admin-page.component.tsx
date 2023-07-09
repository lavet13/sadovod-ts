import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

const MyAdminPage = () => {
  return (
    <>
      <Typography sx={{ textAlign: 'center' }}>Админ панель</Typography>
      <Outlet />
    </>
  );
};

export default MyAdminPage;
