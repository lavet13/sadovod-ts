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
import { HeaderButton } from './header.styles';

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
                <HeaderButton
                  color='primary'
                  variant='contained'
                  disableElevation
                >
                  Каталог
                </HeaderButton>
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
                {['Главная', 'Каталог', 'Оплата и доставка'].map(
                  (text, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton
                        selected={selectedIndex === index}
                        onClick={event => handleListItemClick(event, index)}
                        sx={theme => ({
                          '&& .MuiTouchRipple-child': {
                            backgroundColor: theme.palette.primary.light,
                          },
                          ':hover': {
                            backgroundColor: alpha(
                              theme.palette.primary.main,
                              0.04
                            ),
                          },
                        })}
                      >
                        <ListItemText primary={text} disableTypography />
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
              <Divider />
              {/* @Authenticated user */}
              <List sx={{ mb: 'auto' }}>
                {[
                  'Скидочная карта',
                  'Калькулятор доставки',
                  'Мобильное приложение',
                ].map((text, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      sx={theme => ({
                        '&& .MuiTouchRipple-child': {
                          backgroundColor: theme.palette.primary.light,
                        },
                        ':hover': {
                          backgroundColor: alpha(
                            theme.palette.primary.main,
                            0.04
                          ),
                        },
                      })}
                    >
                      <ListItemText primary={text} disableTypography />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={theme => ({
                      color: theme.palette.error.main,
                      fontWeight: 700,
                      ':hover': {
                        backgroundColor: alpha(theme.palette.error.main, 0.04),
                      },
                    })}
                  >
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
