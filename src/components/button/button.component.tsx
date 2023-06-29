import {
  Button,
  ButtonBase,
  ButtonBaseProps,
  ButtonProps,
  ListItemButton,
  ListItemButtonProps,
} from '@mui/material';
import {} from '@mui/material';

// for typescript to able to use component prop
const GenericButtonComponent = <C extends React.ElementType>(
  props: ButtonProps<C, { component?: C }>
) => {
  return <Button {...props}>{props.children}</Button>;
};

export const GenericListItemButton = <C extends React.ElementType>(
  props: ListItemButtonProps<C, { component?: C }>
) => {
  return <ListItemButton {...props}>{props.children}</ListItemButton>;
};

export const GenericButtonBase = <C extends React.ElementType>(
  props: ButtonBaseProps<C, { component?: C }>
) => {
  return <ButtonBase {...props}>{props.children}</ButtonBase>;
};

export default GenericButtonComponent;
