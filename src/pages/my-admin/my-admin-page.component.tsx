import { Route, Routes } from 'react-router-dom';
import MyAdminNav from './my-admin-nav.component';
import MyAdminGoods from './my-admin-goods.component';

const MyAdminPage = () => {
  return (
    <Routes>
      <Route index element={<MyAdminNav />} />
      <Route path='goods/*' element={<MyAdminGoods />} />
    </Routes>
  );
};

export default MyAdminPage;
