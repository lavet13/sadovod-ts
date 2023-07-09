import Header from '../components/header/header.component';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from './hooks';
import { useEffect } from 'react';
import { fetchGoods } from '../features/goods/goodsSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGoods());
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
