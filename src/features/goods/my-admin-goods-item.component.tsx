import { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import GenericButtonComponent from '../../components/button/button.component';
import { selectGoodById } from './goods-slice';

type MyAdminGoodItem = {
  id: string;
};

const MyAdminGoodItem: FC<MyAdminGoodItem> = ({ id }) => {
  const good = useAppSelector(state => selectGoodById(state, id));
  console.log(good);

  return (
    <GenericButtonComponent
      to={`/my-admin/goods/${id}`}
      component={Link}
      variant='nav-button'
    >
      <Typography>{good?.description}</Typography>
    </GenericButtonComponent>
  );
};

export default MyAdminGoodItem;
