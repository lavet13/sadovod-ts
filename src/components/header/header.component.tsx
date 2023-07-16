import {
  AppBar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Slide,
  Stack,
  SwipeableDrawer,
  Toolbar,
  Tooltip,
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
import { PAGES, PATHS } from '../../pages';

const PAGES_UNAUTH: Record<string, PATHS> = {
  [PATHS.HOME_PAGE]: PATHS.HOME_PAGE,
  [PATHS.CATALOGS_PAGE]: PATHS.CATALOGS_PAGE,
  [PATHS.DELIVERY_PAGE]: PATHS.DELIVERY_PAGE,
};

const PAGES_AUTH: Record<string, PATHS> = {
  [PATHS.DISCOUNT_PAGE]: PATHS.DISCOUNT_PAGE,
  [PATHS.CALCULATOR_PAGE]: PATHS.CALCULATOR_PAGE,
  [PATHS.MOBILE_PAGE]: PATHS.MOBILE_PAGE,
};

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

const Header = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
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

  return (
    <>
      {isSmall ? (
        <Paper elevation={3}>
          <Navigation></Navigation>
          <SubNavigation></SubNavigation>
        </Paper>
      ) : (
        <>
          <HideOnScroll>
            <AppBar
              position='fixed'
              sx={{ backgroundColor: theme.palette.common.white }}
            >
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Tooltip title='Меню' arrow sx={{ flexGrow: 0 }}>
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
                <Logo sx={{ flexGrow: 1 }} />
                <GenericButtonComponent
                  to={PATHS.CATALOGS_PAGE}
                  component={NavLink}
                  variant='nav-button-contained'
                  color='primary'
                  sx={{ flexGrow: 0 }}
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
                width: 220,
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
                {PAGES.map(
                  ({ path, title }) =>
                    PAGES_UNAUTH[path] && (
                      <ListItem key={title} disablePadding>
                        <GenericListItemButton to={path} component={NavLink}>
                          <ListItemText primary={title} disableTypography />
                        </GenericListItemButton>
                      </ListItem>
                    )
                )}
              </List>
              <Divider />
              {/* @Authenticated user */}
              <List sx={{ mb: 'auto' }}>
                {PAGES.map(
                  ({ path, title }) =>
                    PAGES_AUTH[path] && (
                      <ListItem key={title} disablePadding>
                        <GenericListItemButton to={path} component={NavLink}>
                          <ListItemText primary={title} disableTypography />
                        </GenericListItemButton>
                      </ListItem>
                    )
                )}
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
