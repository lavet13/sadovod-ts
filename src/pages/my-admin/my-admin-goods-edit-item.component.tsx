import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { makeSelectGoodById } from '../../features/goods/goodsSlice';
import { useMemo } from 'react';

type EditGoodItemParams = {
  goodId: string;
};

const MyAdminEditGoodItem = () => {
  const { goodId } = useParams<
    keyof EditGoodItemParams
  >() as EditGoodItemParams;

  const selectGoodById = useMemo(makeSelectGoodById, []);
  const good = useAppSelector(state => selectGoodById(state, goodId));

  if (!good)
    throw new Response('', {
      status: 404,
      statusText: 'Product not found',
    });

  return null;
};

export default MyAdminEditGoodItem;
