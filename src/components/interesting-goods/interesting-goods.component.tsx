import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { Pagination, Virtual, Navigation, Autoplay } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import {
  GridContainer,
  SwiperButton,
  SwiperPagination,
  SwiperStyled,
  WaveClipPathBackground,
} from './interesting-goods.styles';

import ProductImage from '../../assets/images/product.png';
import ProductImage2 from '../../assets/images/product2.png';
import ProductImage3 from '../../assets/images/product3.png';
import ProductImage4 from '../../assets/images/product4.png';

import { ReactComponent as NextArrowSVG } from '../../assets/icons/next-arrow.svg';
import { ReactComponent as PrevArrowSVG } from '../../assets/icons/prev-arrow.svg';

const goods = [
  {
    id: 1,
    imgUrl: ProductImage,
  },
  {
    id: 2,
    imgUrl: ProductImage2,
  },
  {
    id: 3,
    imgUrl: ProductImage3,
  },
  {
    id: 4,
    imgUrl: ProductImage4,
  },
  {
    id: 5,
    imgUrl: ProductImage,
  },
  {
    id: 6,
    imgUrl: ProductImage2,
  },
  {
    id: 7,
    imgUrl: ProductImage3,
  },
  {
    id: 8,
    imgUrl: ProductImage4,
  },
  {
    id: 9,
    imgUrl: ProductImage,
  },
  {
    id: 10,
    imgUrl: ProductImage2,
  },
  {
    id: 11,
    imgUrl: ProductImage3,
  },
  {
    id: 12,
    imgUrl: ProductImage4,
  },
];

const InterestingGoods = () => {
  return (
    <>
      <WaveClipPathBackground />
      <Container sx={{ height: `1700px` }}>
        <Stack
          direction='row'
          flexWrap={'wrap'}
          minHeight={'1700px'}
          alignContent={'space-evenly'}
        >
          <GridContainer container>
            <Grid xs />
            <Grid xs={3}>
              <Box
                component='img'
                sx={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
                src={ProductImage}
                alt={''}
              />
            </Grid>
            <Grid xs />
            <Grid xs={4}></Grid>
            <Grid xs />
          </GridContainer>
          <Stack direction={'row'} flexWrap={'wrap'} alignContent={'center'}>
            <Stack
              direction={'row'}
              alignSelf={'center'}
              justifyContent={'space-between'}
              flexBasis={'100%'}
              marginBottom={2}
            >
              <Typography sx={{ pl: 0.6 }} variant='swiperTitle' color='white'>
                Интересные товары
              </Typography>
              <Stack direction='row'>
                <SwiperButton color='white' className='swiper-button-prev'>
                  <PrevArrowSVG />
                </SwiperButton>
                <SwiperPagination
                  sx={{ position: 'initial!important' }}
                  className='swiper-pagination2'
                />
                <SwiperButton color='white' className='swiper-button-next'>
                  <NextArrowSVG />
                </SwiperButton>
              </Stack>
            </Stack>
            <SwiperStyled
              grabCursor
              speed={400}
              slidesPerView={4}
              spaceBetween={30}
              threshold={1}
              mousewheel
              modules={[Pagination, Virtual, Navigation, Autoplay]}
              pagination={{
                el: '.swiper-pagination2',
                type: 'bullets',
                dynamicBullets: true,
                dynamicMainBullets: 2,
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              virtual
            >
              {goods.map(good => (
                <SwiperSlide key={good.id} virtualIndex={good.id}>
                  <Box
                    loading='lazy'
                    component='img'
                    sx={theme => ({
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: theme.shape.sm,
                    })}
                    src={good.imgUrl}
                    alt={''}
                  />
                  <div className='swiper-lazy-preloader' />
                </SwiperSlide>
              ))}
            </SwiperStyled>
            <Stack
              alignItems={'center'}
              justifyContent={'space-between'}
              flexBasis={'100%'}
              marginTop={5}
            >
              <Button variant='long-btn' color='white'>
                Перейти в каталог
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default InterestingGoods;
