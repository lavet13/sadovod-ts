import { ClipPathGreenBackground, GridContainer, Image } from './hero.styles';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Container, Divider, Stack, Typography } from '@mui/material';
import WomanWithBaggages from '../../assets/images/womanWithBaggages.png';

const Hero = () => {
  return (
    <>
      <ClipPathGreenBackground sx={{ display: { md: 'block', xs: 'none' } }} />
      <Container sx={{ maxWidth: { md: '100%', lg: '1024px' } }}>
        <GridContainer container columns={24}>
          <Grid xs={0} md={12} lg={12} container sx={{ position: 'relative' }}>
            <Image src={WomanWithBaggages} alt={'Woman'} />
          </Grid>
          <Grid xs={2} md />
          <Grid xs={20} md={10} lg={12} sx={{ mt: { xs: 10, md: 12 } }}>
            <Stack height={'100%'} spacing={15}>
              <Stack alignItems={{ xs: 'center', md: 'flex-end' }}>
                <Typography
                  color='secondary'
                  variant='subtitle1'
                  mb={{ md: -2, sm: -1.2, xs: -1 }}
                  noWrap
                >
                  Доставка товаров с рынка
                </Typography>
                <Typography variant='h1' color='primary'>
                  Садовод
                </Typography>
                <Divider
                  variant='fullWidth'
                  flexItem
                  sx={theme => ({
                    borderColor: theme.palette.primary.main,
                    borderWidth: { xs: 1, sm: 2 },
                    mb: { md: 2, xs: 1 },
                    [theme.breakpoints.down('xl')]: {
                      width: '450px',
                      alignSelf: 'end',
                    },

                    [theme.breakpoints.down('md')]: {
                      width: '100%',
                      alignSelf: 'center',
                    },
                  })}
                />
                <Typography color='secondary' variant='h2' noWrap>
                  Покупай выгодно!!
                </Typography>
                <Typography
                  color='secondary'
                  variant='h4'
                  sx={{ mt: { md: 0, sm: 0.5 } }}
                  noWrap
                >
                  доставка по всей РОССИИ • ЛДНР • КРЫМ
                </Typography>
              </Stack>
              <Stack
                alignItems={{ xs: 'center', md: 'flex-end' }}
                justifyContent='center'
                spacing={2}
                sx={{ height: '100%' }}
              >
                <Button href='tel:+7 (949) 516-25-12' variant='tel-btn'>
                  +7 (949) 516-25-12
                </Button>
                <Button variant='order-btn' color='yellow'>
                  Сделать заказ
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={2} md />
        </GridContainer>
      </Container>
    </>
  );
};

export default Hero;
