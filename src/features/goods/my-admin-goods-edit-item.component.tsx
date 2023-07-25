import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useParams, useNavigate, json } from 'react-router-dom';
import { enqueueSnackbar, useSnackbar } from 'notistack';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import {
  Good,
  editGood,
  fetchGoods,
  selectGoodById,
  selectGoodsError,
  selectGoodsStatus,
} from './goods-slice';

import { Skeleton, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Save } from '@mui/icons-material';

import PriceFormat from '../../utils/react-number-format/number-format/price-format';
import { objectKeys } from '../../utils/object-keys/object-keys';
import { createError } from '../../utils/error/error.utils';

type EditGoodItemParams = {
  goodId: string;
};

export type GoodDefaultValues = Omit<Good, 'id'>;

const defaultValues: GoodDefaultValues = {
  price: '',
  description: '',
  photo: '',
  sizes: [],
};

const MyAdminEditGoodItem = () => {
  const { goodId } = useParams<
    keyof EditGoodItemParams
  >() as EditGoodItemParams;

  const [isLoading, setIsLoading] = useState(false);

  const goodsStatus = useAppSelector(selectGoodsStatus);
  const goodsError = useAppSelector(selectGoodsError);
  const good = useAppSelector(state => selectGoodById(state, goodId));

  const goodsIsIdle = goodsStatus === 'idle';
  const goodsIsLoading = goodsStatus === 'loading';
  const goodsIsFailed = goodsStatus === 'failed';

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { control, handleSubmit, setValue } = useForm<GoodDefaultValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<GoodDefaultValues> = async data => {
    if (isLoading) return;

    setIsLoading(isLoading => !isLoading);

    const good: Good = { id: goodId, ...data };

    const resultAction = await dispatch(editGood(good));

    if (editGood.fulfilled.match(resultAction)) {
      enqueueSnackbar('Товар изменен успешно!', {
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

    setIsLoading(isLoading => !isLoading);
    navigate('/my-admin/goods');
  };

  useEffect(() => {
    if (!good) dispatch(fetchGoods());

    if (goodsIsIdle && !good) {
      throw createError('Товара не существует!', 'Product not found!');
    }

    if (good) {
      objectKeys(defaultValues).forEach(field => setValue(field, good[field]));
    }
  }, [good, setValue, goodsIsIdle, dispatch]);

  return (
    <>
      {goodsIsLoading ? (
        <Skeleton variant='rectangular' />
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack marginX={'auto'} pt={5} maxWidth={350} spacing={3}>
              <Controller
                name='description'
                control={control}
                rules={{ required: 'Описание не заполнено!' }}
                render={({ field, fieldState: { error, invalid } }) => (
                  <TextField
                    {...field}
                    label='Описание товара'
                    error={invalid}
                    helperText={
                      error?.type === 'required' ? error.message : null
                    }
                    variant='standard'
                  />
                )}
              />

              <Controller
                name='price'
                control={control}
                rules={{
                  validate: {
                    greaterThanZero: value =>
                      !(+value <= 0) || 'Сумма должна быть больше нуля',
                  },
                }}
                render={({ field, fieldState: { invalid, error } }) => {
                  console.log(field.value);
                  return (
                    <TextField
                      {...field}
                      label='Цена'
                      error={invalid}
                      helperText={
                        error?.type === 'greaterThanZero' ? error.message : null
                      }
                      variant='standard'
                      InputProps={{
                        inputComponent: PriceFormat as any,
                      }}
                    />
                  );
                }}
              />

              <LoadingButton
                type='submit'
                size='small'
                startIcon={<Save />}
                loading={isLoading}
                variant='long-btn'
                color='primary'
              >
                <span>Сохранить товар</span>
              </LoadingButton>
            </Stack>
          </form>
        </>
      )}
    </>
  );
};

export default MyAdminEditGoodItem;
