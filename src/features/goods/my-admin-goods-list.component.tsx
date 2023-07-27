import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import {
  fetchGoods,
  isErrorResponse,
  selectGoodIds,
  selectGoodsError,
  selectGoodsStatus,
  isError,
} from './goods-slice';

import { createError } from '../../utils/error/error.utils';

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

  if (goodsStatus === 'failed') {
    if (isErrorResponse(error)) {
      throw createError(error.errorMessage, error?.statusCode);
    } else if (isError(error)) {
      throw createError(error.message);
    }
  }

  return (
    <>
      {goodsStatus === 'loading' ? (
        <Skeleton />
      ) : (
        goodIds.map(goodId => <MyAdminGoodItem key={goodId} id={goodId} />)
      )}
    </>
  );
};

export default MyAdminGoodsList;
