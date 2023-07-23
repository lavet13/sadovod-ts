import { Route, Routes } from 'react-router-dom';
import MyAdminGoodsList from './my-admin-goods-list.component';
import MyAdminEditGoodItem from './my-admin-goods-edit-item.component';

const MyAdminGoods = () => {
  return (
    <Routes>
      <Route index element={<MyAdminGoodsList />} />
      <Route path=':goodId' element={<MyAdminEditGoodItem />} />
    </Routes>
  );
};

export default MyAdminGoods;