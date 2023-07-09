import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  fetchGoods,
  selectGoodIds,
  selectGoodsError,
  selectGoodsStatus,
} from '../../features/goods/goodsSlice';
import MyAdminGoodItem from './my-admin-goods-item.component';
import { Skeleton } from '@mui/material';

const MyAdminGoodsList = () => {
  const dispatch = useAppDispatch();
  const goodIds = useAppSelector(selectGoodIds);
  const goodsStatus = useAppSelector(selectGoodsStatus);
  const error = useAppSelector(selectGoodsError);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  let content;

  if (goodsStatus === 'loading') {
    content = <Skeleton />;
  } else if (goodsStatus === 'failed') {
    throw { message: error?.message, statusText: error?.statusCode };
  } else {
    content = goodIds.map(goodId => (
      <MyAdminGoodItem key={goodId} id={goodId} />
    ));
  }

  return content;
};

export default MyAdminGoodsList;
