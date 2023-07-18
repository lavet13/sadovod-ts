import {
  Button,
  CardActions,
  CardContent,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Card,
  ClipPathGreenBackground,
  OKIcon,
  SocialMediaWrapper,
  VKIcon,
} from './social-media.styles';
import Grid from '@mui/material/Unstable_Grid2';

const SocialMedia = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SocialMediaWrapper>
      <ClipPathGreenBackground />
      <Container sx={{ height: `300px` }}>
        <Grid container height={300}>
          <Grid md />
          {!isPhone && (
            <Grid md={5} alignSelf={'center'}>
              <Typography variant='socialTitle' color='white' noWrap>
                Войди/Зарегистрируйся
              </Typography>
              <Typography variant='socialSubtitle' color='white' noWrap>
                Чтобы оформить заказ
              </Typography>
              <Button
                variant='md-btn'
                color='secondary'
                sx={{ marginTop: 2, px: 6 }}
              >
                Войти
              </Button>
            </Grid>
          )}
          <Grid md />
          <Grid xs={12} md={4} alignSelf={'flex-end'}>
            <Card elevation={2}>
              <Stack>
                <CardContent
                  sx={({ typography: { pxToRem } }) => ({
                    padding: `${pxToRem(23)} ${pxToRem(30)}`,
                  })}
                >
                  <Typography variant='socialTitle' color='secondary'>
                    Мы в соц. сетях
                  </Typography>
                </CardContent>
                <CardActions
                  sx={({ typography: { pxToRem } }) => ({
                    flexWrap: 'wrap',
                    alignContent: 'flex-start',
                    padding: pxToRem(30),
                  })}
                  disableSpacing
                >
                  <Stack
                    direction={'row'}
                    spacing={{ xs: 2, md: 1 }}
                    flexBasis={'100%'}
                    marginBottom={2}
                  >
                    <VKIcon />
                    <Button
                      variant='md-btn'
                      sx={{ alignSelf: 'center', width: '100%' }}
                    >
                      ВКонтакте
                    </Button>
                  </Stack>
                  <Stack
                    direction='row'
                    spacing={{ xs: 2, md: 1 }}
                    flexBasis={'100%'}
                  >
                    <OKIcon />
                    <Button
                      variant='md-btn'
                      sx={{ alignSelf: 'center', width: '100%' }}
                    >
                      Одноклассники
                    </Button>
                  </Stack>
                </CardActions>
              </Stack>
            </Card>
          </Grid>
          <Grid md />
        </Grid>
      </Container>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;
