import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import {
  ClipPathGreenBackground,
  OKIcon,
  SocialMediaWrapper,
  VKIcon,
} from './social-media.styles';
import Grid from '@mui/material/Unstable_Grid2';

const SocialMedia = () => {
  return (
    <SocialMediaWrapper>
      <ClipPathGreenBackground />
      <Container sx={{ height: `300px` }}>
        <Grid container height={300}>
          <Grid xs />
          <Grid xs={4} alignSelf={'center'}>
            <Typography variant='socialTitle' color='white'>
              Войди/Зарегистрируйся
            </Typography>
            <Typography variant='socialSubtitle' color='white'>
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
          <Grid xs />
          <Grid xs={3} alignSelf={'flex-end'}>
            <Card
              elevation={2}
              sx={theme => ({
                background: '#f4f4f4',
                width: theme.typography.pxToRem(410),
                borderRadius: 5,
                position: 'relative',
                minHeight: theme.typography.pxToRem(445),
                top: 50,
              })}
            >
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
                    spacing={1}
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
                  <Stack direction='row' spacing={1} flexBasis={'100%'}>
                    <OKIcon />
                    <Button
                      variant='md-btn'
                      sx={{ alignSelf: 'center', width: '100%' }}
                    >
                      Однокласники
                    </Button>
                  </Stack>
                </CardActions>
              </Stack>
            </Card>
          </Grid>
          <Grid xs />
        </Grid>
      </Container>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;
