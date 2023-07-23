import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import {
  fetchGoods,
  selectGoodById,
  selectGoodsStatus,
} from '../../features/goods/goodsSlice';

import { InputAdornment, Skeleton, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Save } from '@mui/icons-material';

import PriceFormat from '../../utils/react-number-format/number-format/price-format';
import { objectKeys } from '../../utils/object-keys/object-keys';
import { createError } from '../../utils/error/error.utils';

type EditGoodItemParams = {
  goodId: string;
};

export type GoodDefaultValues = {
  price: string;
  description: string;
  photo: File | null;
};

const defaultValues: GoodDefaultValues = {
  price: '',
  description: '',
  photo: null,
};

const MyAdminEditGoodItem = () => {
  const { goodId } = useParams<
    keyof EditGoodItemParams
  >() as EditGoodItemParams;

  const goodsStatus = useAppSelector(selectGoodsStatus);
  const isIdle = goodsStatus === 'idle';
  const isLoading = goodsStatus === 'loading';
  const isFailed = goodsStatus === 'failed';

  const good = useAppSelector(state => selectGoodById(state, goodId));

  const dispatch = useAppDispatch();

  const { control, handleSubmit, reset, setValue } = useForm<GoodDefaultValues>(
    {
      defaultValues,
    }
  );

  const onSubmit: SubmitHandler<GoodDefaultValues> = data => {
    if (isLoading) return;

    console.log(data);
  };

  useEffect(() => {
    if (!good) dispatch(fetchGoods());

    if (isIdle && !good) {
      throw createError('Товара не существует!', 'Product not found!');
    }

    if (good) {
      objectKeys(defaultValues).forEach(field => setValue(field, good[field]));
    }
  }, [good, setValue, isIdle, dispatch]);

  return (
    <>
      {isLoading ? (
        <Skeleton variant='rectangular' />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='description'
            control={control}
            rules={{ required: 'Описание не заполнено!' }}
            render={({ field, fieldState: { error, invalid } }) => {
              console.log(field);
              return (
                <TextField
                  {...field}
                  label='Описание товара'
                  error={invalid}
                  helperText={error?.type === 'required' ? error.message : null}
                  variant='standard'
                />
              );
            }}
          />

          <Controller
            name='price'
            control={control}
            rules={{
              validate: value =>
                !(+value <= 0) || 'Сумма должна быть больше нуля',
            }}
            render={({ field, fieldState: { invalid, error } }) => (
              <TextField
                {...field}
                label='Цена'
                error={invalid}
                helperText={error?.type === 'validate' ? error.message : null}
                variant='standard'
                InputProps={{
                  inputComponent: PriceFormat as any,
                  startAdornment: (
                    <InputAdornment position='start'>₽</InputAdornment>
                  ),
                }}
              />
            )}
          />

          <LoadingButton
            type='submit'
            endIcon={<Save />}
            loading={isLoading}
            loadingPosition='end'
            variant='long-btn'
            color='primary'
          >
            <span>Сохранить товар</span>
          </LoadingButton>
        </form>
      )}
    </>
  );
};

export default MyAdminEditGoodItem;
