import { Route, Routes } from 'react-router-dom';
import MyAdminGoodsList from '../../features/goods/my-admin-goods-list.component';
import MyAdminAddEditGoodItem from '../../features/goods/my-admin-goods-add-edit-item.component';

const MyAdminGoods = () => {
  return (
    <Routes>
      <Route index element={<MyAdminGoodsList />} />
      <Route path=':goodId' element={<MyAdminAddEditGoodItem />} />
    </Routes>
  );
};

export default MyAdminGoods;
