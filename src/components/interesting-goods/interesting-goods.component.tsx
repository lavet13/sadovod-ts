import parse from 'html-react-parser';
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

const goods = {
  1: {
    id: 1,
    price: 300,
    sizes: [46, 48, 50, 52, 54],
    description: `Так как продавец сам покупает это место, он может накатать сюда все что хочет в пределах определенного количества символов.<br/><br/>
    У меня в фигме вышло место под 418 символов. (если без абзацев)<br/><br/><br/>
    Послденяя строчка доступная для использования) вот тут :)`,
    imgUrl: ProductImage,
  },
  2: {
    id: 2,
    imgUrl: ProductImage2,
  },
  3: {
    id: 3,
    imgUrl: ProductImage3,
  },
  4: {
    id: 4,
    imgUrl: ProductImage4,
  },
  5: {
    id: 5,
    imgUrl: ProductImage,
  },
  6: {
    id: 6,
    imgUrl: ProductImage2,
  },
  7: {
    id: 7,
    imgUrl: ProductImage3,
  },
  8: {
    id: 8,
    imgUrl: ProductImage4,
  },
  9: {
    id: 9,
    imgUrl: ProductImage,
  },
  10: {
    id: 10,
    imgUrl: ProductImage2,
  },
  11: {
    id: 11,
    imgUrl: ProductImage3,
  },
  12: {
    id: 12,
    imgUrl: ProductImage4,
  },
};

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
            <Grid xs={4}>
              <Typography>Товар недели</Typography>
              <Typography>Цена:</Typography>
              <Typography>{goods[1].price}</Typography>
              <Typography>Размеры:</Typography>
              <Typography>{goods[1].sizes?.join(';')}</Typography>
              <Typography>Описание:</Typography>
              <Typography>{parse(goods[1].description)}</Typography>
            </Grid>
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
              {Object.values(goods).map(good => (
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
