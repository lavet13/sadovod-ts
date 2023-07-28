import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import {
  fetchGoods,
  selectGoodsStatus,
  goodsErrorsReset,
  selectGoodsError,
  selectGoods,
} from './goods-slice';

import { CircularProgress, Stack } from '@mui/material';
import { GridRowsProp, GridColDef, DataGrid } from '@mui/x-data-grid';

const MyAdminGoodsList = () => {
  const dispatch = useAppDispatch();

  const goods = useAppSelector(selectGoods);
  const goodsStatus = useAppSelector(selectGoodsStatus);
  const error = useAppSelector(selectGoodsError);

  const rows: GridRowsProp = goods.map(({ id, description, price }) => ({
    id,
    description,
    price,
  }));

  const columns: GridColDef[] = [
    { field: 'description', headerName: 'Описание', width: 150 },
    { field: 'price', headerName: 'Цена', width: 150 },
  ];

  useEffect(() => {
    (async () => {
      const resultAction = await dispatch(fetchGoods());

      if (fetchGoods.fulfilled.match(resultAction)) {
        dispatch(goodsErrorsReset());
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    if (goodsStatus !== 'loading' && error) throw error;
  }, [goodsStatus]);

  return (
    <>
      {goodsStatus === 'loading' ? (
        <Stack paddingTop={5} alignItems='center'>
          <CircularProgress color='primary' />
        </Stack>
      ) : (
        <DataGrid rows={rows} columns={columns} />
      )}
    </>
  );
};

export default MyAdminGoodsList;
