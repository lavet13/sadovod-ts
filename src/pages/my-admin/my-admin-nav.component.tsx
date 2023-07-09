import GenericButtonComponent from '../../components/button/button.component';
import { NavLink } from 'react-router-dom';

const MyAdminNav = () => {
  return (
    <GenericButtonComponent
      to={'/my-admin/goods'}
      component={NavLink}
      variant='nav-button'
    >
      Товары
    </GenericButtonComponent>
  );
};

export default MyAdminNav;
