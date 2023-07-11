import { FC, useMemo } from 'react';
import { makeSelectGoodById } from '../../features/goods/goodsSlice';
import { useAppSelector } from '../../app/hooks';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import GenericButtonComponent from '../../components/button/button.component';

type MyAdminGoodItem = {
  id: string;
};

const MyAdminGoodItem: FC<MyAdminGoodItem> = ({ id }) => {
  const selectGoodById = useMemo(makeSelectGoodById, []);
  const good = useAppSelector(state => selectGoodById(state, id));
  console.log(good);

  return (
    <GenericButtonComponent
      to={`/my-admin/goods/${id}`}
      component={Link}
      variant='nav-button'
    >
      <Typography>{good?.description}</Typography>
      {','}
      <Typography>{good?.price}</Typography>
      {','}
      {good?.sizes.map((size, idx, arr) => (
        <>
          <Typography key={size}>{size}</Typography>
          {idx !== arr.length - 1 && ','}
        </>
      ))}
    </GenericButtonComponent>
  );
};

export default MyAdminGoodItem;
