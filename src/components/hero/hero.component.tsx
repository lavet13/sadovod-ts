import {
  ClipPathBlackStroke,
  ClipPathGreenBackground,
  GridContainer,
  HeroDivider,
  Image,
} from './hero.styles';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import WomanWithBaggages from '../../assets/images/womanWithBaggages.png';

const Hero = () => {
  return (
    <Box position={'relative'}>
      <ClipPathGreenBackground sx={{ display: { md: 'block', xs: 'none' } }} />
      <ClipPathBlackStroke sx={{ display: { md: 'block', xs: 'none' } }} />
      <Container>
        <GridContainer container columns={24}>
          <Grid xs={0} md={12} lg={12} container sx={{ position: 'relative' }}>
            <Image src={WomanWithBaggages} alt={'Woman'} />
          </Grid>
          <Grid xs={2} md />
          <Grid xs={20} md={10} lg={12} sx={{ mt: { xs: 4, md: 12 } }}>
            <Stack sx={{ height: '100%' }} spacing={{ xs: 2, md: 0 }}>
              <Stack
                alignItems={{ xs: 'center', md: 'flex-end' }}
                justifyContent={{ md: 'flex-start', xs: 'flex-end' }}
                flexBasis={'50%'}
              >
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
                <HeroDivider variant='fullWidth' flexItem />
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
                justifyContent={{ xs: 'flex-start', md: 'center' }}
                spacing={{ xs: 1, sm: 2 }}
                flexBasis={'50%'}
              >
                <Button href='tel:+79495162512' variant='tel-btn'>
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
    </Box>
  );
};

export default Hero;
