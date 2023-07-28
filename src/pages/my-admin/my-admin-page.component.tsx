import { Outlet } from 'react-router-dom';
import MyAdminNav from './my-admin-nav.component';

const MyAdminPage = () => {
  return (
    <>
      <MyAdminNav />
      <Outlet />
    </>
  );
};

export default MyAdminPage;
