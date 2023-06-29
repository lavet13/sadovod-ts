import {
  AppBar,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Stack,
  SwipeableDrawer,
  Toolbar,
  Tooltip,
  alpha,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import Navigation from '../navigation/navigation.component';
import SubNavigation from '../sub-navigation/sub-navigation.component';
import Logo from '../logo/logo.component';
import React, { ReactElement, useState } from 'react';
import Shopping2 from '../../assets/icons/luggages2.svg';
import { NavLink } from 'react-router-dom';
import GenericButtonComponent, {
  GenericListItemButton,
} from '../button/button.component';

type HideOnScrollProps = {
  children: ReactElement;
};

const HideOnScroll = (props: HideOnScrollProps) => {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

const pages = [
  { path: '/', title: 'Главная' },
  { path: '/catalogs', title: 'Каталог' },
  { path: '/delivery', title: 'Оплата и доставка' },
];

const pagesAuth = [
  { path: '/discount', title: 'Скидочная карта' },
  { path: '/calculator', title: 'Калькулятор доставки' },
  { path: '/mobile-app', title: 'Мобильное приложение' },
];

const Header = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up('md'));

  const toggleDrawer =
    (flag: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setDrawerIsOpen(flag);
    };

  const handleListItemClick = (
    _: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <>
      {isSmall ? (
        <>
          <Navigation></Navigation>
          <SubNavigation></SubNavigation>
        </>
      ) : (
        <>
          <HideOnScroll>
            <AppBar
              position='fixed'
              sx={{ backgroundColor: theme.palette.white.main }}
            >
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                maxHeight={{ xs: 40, sm: 50 }}
              >
                <Tooltip title='Меню' arrow>
                  <IconButton
                    onClick={toggleDrawer(true)}
                    size='large'
                    edge='start'
                    color='primary'
                    aria-label='menu'
                    sx={{ ml: 1 }}
                  >
                    <Menu />
                  </IconButton>
                </Tooltip>
                <Logo />
                <GenericButtonComponent
                  to={'/catalogs'}
                  component={NavLink}
                  variant='nav-button-contained'
                  color='primary'
                >
                  Каталог
                </GenericButtonComponent>
              </Stack>
            </AppBar>
          </HideOnScroll>
          <Toolbar />
          <SwipeableDrawer
            anchor='left'
            open={drawerIsOpen}
            onOpen={toggleDrawer(true)}
            onClose={toggleDrawer(false)}
          >
            <Stack
              sx={{
                width: 230,
                height: '100%',
                background: `url(${Shopping2}) bottom right/8rem no-repeat`,
              }}
            >
              <Divider
                variant='fullWidth'
                sx={theme => ({
                  borderColor: theme.palette.primary.main,
                  borderWidth: 2,
                })}
              />

              <List>
                {pages.map(({ path, title }) => (
                  <ListItem key={title} disablePadding>
                    <GenericListItemButton to={path} component={NavLink}>
                      <ListItemText primary={title} disableTypography />
                    </GenericListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              {/* @Authenticated user */}
              <List sx={{ mb: 'auto' }}>
                {pagesAuth.map(({ path, title }) => (
                  <ListItem key={title} disablePadding>
                    <GenericListItemButton to={path} component={NavLink}>
                      <ListItemText primary={title} disableTypography />
                    </GenericListItemButton>
                  </ListItem>
                ))}
              </List>
              <List>
                <ListItem disablePadding>
                  <ListItemButton color='error'>
                    <ListItemText disableTypography primary='Выход' />
                  </ListItemButton>
                </ListItem>
              </List>
            </Stack>
          </SwipeableDrawer>
        </>
      )}
    </>
  );
};

export default Header;
