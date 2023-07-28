import { useState } from 'react';

import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import GenericButtonComponent, {
  GenericButtonBaseComponent,
  GenericListItemButton,
} from '../../components/button/button.component';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [{ title: 'Товары', path: 'goods' }];
const iOS =
  typeof navigator !== 'undefined' &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

const MyAdminNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggleClose = () => setMobileOpen(false);
  const handleDrawerToggleOpen = () => setMobileOpen(true);

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <GenericButtonComponent
        component={NavLink}
        to={'/my-admin'}
        variant='nav-button-contained'
        color='secondary'
        sx={{
          display: 'flex',
          paddingY: 2,
        }}
      >
        Админ панель
      </GenericButtonComponent>

      <Divider sx={{ py: 0.3 }} />
      <List>
        {navItems.map(({ title, path }) => (
          <ListItem key={title} disablePadding>
            <GenericListItemButton
              to={path}
              component={NavLink}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={title} disableTypography />
            </GenericListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar component='nav' sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggleOpen}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <GenericButtonBaseComponent
            component={NavLink}
            to={'/my-admin'}
            sx={{
              marginRight: 'auto',
              alignSelf: 'stretch',
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              paddingX: 2,
            }}
          >
            Админ панель
          </GenericButtonBaseComponent>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignSelf: 'stretch',
              alignItems: 'center',
            }}
          >
            {navItems.map(({ title, path }) => (
              <GenericButtonComponent
                variant='nav-button-contained'
                color='secondary'
                key={title}
                component={NavLink}
                to={path}
                sx={{ alignSelf: 'stretch' }}
              >
                {title}
              </GenericButtonComponent>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <SwipeableDrawer
          open={mobileOpen}
          onOpen={handleDrawerToggleOpen}
          onClose={handleDrawerToggleClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </SwipeableDrawer>
      </Box>
    </Box>
  );
};

export default MyAdminNav;
