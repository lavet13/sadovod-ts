import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import {
  Good,
  editGood,
  fetchGoods,
  isError,
  isErrorResponse,
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

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type AddEditGoodItemParams = {
  goodId: string;
};

export type GoodDefaultValues = Omit<Good, 'id'>;

const defaultValues: GoodDefaultValues = {
  price: '',
  description: '',
  photo: '',
  sizes: [],
};

const MyAdminAddEditGoodItem = () => {
  const { goodId } = useParams<
    keyof AddEditGoodItemParams
  >() as AddEditGoodItemParams;

  const isAddMode = !goodId;

  const validationSchema = Yup.object().shape({
    price: Yup.string().defined().required('Цена обязательна к заполнению'),
    description: Yup.string()
      .defined()
      .required('Описание обязательно к заполнению'),
    photo: Yup.string().defined().notRequired(),
    sizes: Yup.array().defined().of(Yup.number().defined()).notRequired(),
  });

  const [isLoading, setIsLoading] = useState(false);

  const goodsStatus = useAppSelector(selectGoodsStatus);
  const error = useAppSelector(selectGoodsError);
  const good = useAppSelector(state => selectGoodById(state, goodId));

  const goodsIsIdle = goodsStatus === 'idle';
  const goodsIsLoading = goodsStatus === 'loading';

  const goodsIsFailed = goodsStatus === 'failed';

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { control, handleSubmit, setValue } = useForm<GoodDefaultValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<GoodDefaultValues> = async data => {
    console.log('123');
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

  if (goodsIsFailed) {
    if (isErrorResponse(error)) {
      throw createError(error.errorMessage, error?.statusCode);
    } else if (isError(error)) {
      throw createError(error.message);
    }
  }

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
                // rules={{ required: 'Описание не заполнено!' }}
                render={({ field, fieldState: { error, invalid } }) => (
                  <TextField
                    {...field}
                    label='Описание товара'
                    error={invalid}
                    helperText={error?.message || null}
                    variant='standard'
                  />
                )}
              />

              <Controller
                name='price'
                control={control}
                // rules={{
                //   validate: {
                //     greaterThanZero: value =>
                //       !(+value <= 0) || 'Сумма должна быть больше нуля',
                //   },
                // }}
                render={({ field, fieldState: { invalid, error } }) => {
                  console.log(field.value);
                  return (
                    <TextField
                      {...field}
                      label='Цена'
                      error={invalid}
                      helperText={error?.message || null}
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

export default MyAdminAddEditGoodItem;
