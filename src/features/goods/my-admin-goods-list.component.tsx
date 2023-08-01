import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import {
  fetchGoods,
  selectGoodsStatus,
  goodsErrorsReset,
  selectGoodsError,
  selectGoods,
  deleteGood,
} from './goods-slice';

import { CircularProgress, Stack } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import {
  GridRowsProp,
  GridColDef,
  DataGrid,
  GridRenderCellParams,
} from '@mui/x-data-grid';
import GenericButtonComponent from '../../components/button/button.component';
import { Link } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { enqueueSnackbar } from 'notistack';

const MyAdminGoodsList = () => {
  const dispatch = useAppDispatch();

  const goods = useAppSelector(selectGoods);
  const goodsStatus = useAppSelector(selectGoodsStatus);
  const error = useAppSelector(selectGoodsError);

  const RenderActions = (props: GridRenderCellParams<any, string>) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const { value: id } = props;

    const handleDelete = async (id: string) => {
      setIsDeleting(isDeleting => !isDeleting);

      const resultAction = await dispatch(deleteGood(id));

      if (deleteGood.fulfilled.match(resultAction)) {
        enqueueSnackbar('Товар успешно удален!', {
          variant: 'success',
          anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
          preventDuplicate: true,
        });
      } else {
        if (resultAction.payload) {
          // my error
          enqueueSnackbar(resultAction.payload.errorMessage, {
            variant: 'error',
            anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
            preventDuplicate: true,
          });
        } else {
          // some random error
          enqueueSnackbar(
            resultAction.error.message
              ? resultAction.error.message
              : 'unknown error',
            {
              variant: 'error',
              anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
              preventDuplicate: true,
            }
          );
        }
      }

      setIsDeleting(isDeleting => !isDeleting);
    };

    return (
      <Stack spacing={1} direction={'row'}>
        <GenericButtonComponent
          variant='round-btn'
          component={Link}
          to={`edit/${id}`}
          startIcon={<Edit />}
        />

        <LoadingButton
          variant='round-btn'
          color='error'
          startIcon={<Delete />}
          loading={isDeleting}
          onClick={() => {
            if (id) handleDelete(id);
          }}
        >
          <span></span>
        </LoadingButton>
      </Stack>
    );
  };

  const rows: GridRowsProp = goods.map(({ id, description, price }) => ({
    id,
    description,
    price,
    actions: id,
  }));

  const columns: GridColDef[] = [
    { field: 'description', headerName: 'Описание', width: 150 },
    { field: 'price', headerName: 'Цена', width: 150 },
    {
      field: 'actions',
      headerName: `Действия`,
      width: 150,
      renderCell: RenderActions,
    },
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
        <DataGrid autoHeight rows={rows} columns={columns} />
      )}
    </>
  );
};

export default MyAdminGoodsList;
