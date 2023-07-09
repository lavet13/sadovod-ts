import { FC } from 'react';
import { selectGoodById } from '../../features/goods/goodsSlice';
import { useAppSelector } from '../../app/hooks';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import GenericButtonComponent from '../../components/button/button.component';

type MyAdminGoodItem = {
  id: string;
};

const MyAdminGoodItem: FC<MyAdminGoodItem> = ({ id }) => {
  const good = useAppSelector(state => selectGoodById(state, id));

  return (
    <GenericButtonComponent
      to={`/my-admin/goods/${id}`}
      component={Link}
      variant='nav-button'
    >
      <Typography>{good?.description}</Typography>
      <Typography>{good?.price}</Typography>
      {good?.sizes.map(size => (
        <Typography key={size}>{size}</Typography>
      ))}
    </GenericButtonComponent>
  );
};

export default MyAdminGoodItem;
