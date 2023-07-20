import parse from 'html-react-parser';

import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2';

import { Pagination, Virtual, Navigation, Autoplay } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import {
  GridContainer,
  SwiperButton,
  SwiperPagination,
  SwiperStyled,
  WaveClipPathBackground,
  Container,
  InterestingGoodsWrapper,
  ImageButton,
  ImageContent,
} from './interesting-goods.styles';

import ProductImage from '../../assets/images/product.png';
import ProductImage2 from '../../assets/images/product2.png';
import ProductImage3 from '../../assets/images/product3.png';
import ProductImage4 from '../../assets/images/product4.png';

import { ReactComponent as NextArrowSVG } from '../../assets/icons/next-arrow.svg';
import { ReactComponent as PrevArrowSVG } from '../../assets/icons/prev-arrow.svg';

import SocialMediaCard from '../social-media-card/social-media-card.component';
import { Link } from 'react-router-dom';

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
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <WaveClipPathBackground>
        <Container>
          <InterestingGoodsWrapper>
            <Stack>
              <GridContainer container columns={24}>
                <Grid xs md />
                <Grid xs={12} md={10} lg={8}>
                  <Box
                    component='img'
                    sx={{
                      display: 'block',
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      borderRadius: 'md',
                    }}
                    src={ProductImage}
                    alt={''}
                  />
                </Grid>
                <Grid xs={1} sm={1} md={1} lg={2} />
                <Grid xs={11} md={13} lg={12}>
                  <Stack
                    spacing={{ xs: 1.5, md: 2 }}
                    height={'100%'}
                    justifyContent={'center'}
                  >
                    <Typography
                      variant='productTitle'
                      color='white'
                      noWrap
                      marginBottom={{ xs: 2, md: 'initial' }}
                    >
                      Товар недели
                    </Typography>
                    <Box>
                      <Typography variant='productSubtitle' color='white'>
                        Цена:
                      </Typography>
                      <Typography
                        variant='productSubtitle'
                        color='white'
                        sx={{ fontWeight: 400 }}
                      >
                        {goods[1].price}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant='productSubtitle' color='white'>
                        Размеры:
                      </Typography>
                      <Typography
                        variant='productSubtitle'
                        color='white'
                        sx={{ fontWeight: 400 }}
                      >
                        {goods[1].sizes?.join(';')}
                      </Typography>
                    </Box>
                    {!isPhone && (
                      <Grid container columns={24}>
                        <Grid md>
                          <Typography variant='productSubtitle' color='white'>
                            Описание:
                          </Typography>
                          <Typography variant='productText' color='white'>
                            {parse(goods[1].description)}
                          </Typography>
                        </Grid>
                        <Grid md={4} />
                      </Grid>
                    )}
                  </Stack>
                </Grid>
                <Grid xs md />
              </GridContainer>

              {isPhone && (
                <GridContainer container columns={24}>
                  <Grid xs md />
                  <Grid md={8}></Grid>
                  <Grid xs md />
                  <Grid
                    xs={24}
                    sm={18}
                    md={10}
                    marginTop={{ xs: 3, md: 'initial' }}
                  >
                    <Typography variant='productSubtitle' color='white'>
                      Описание:
                    </Typography>
                    <Typography variant='productText' color='white'>
                      {parse(goods[1].description)}
                    </Typography>
                  </Grid>
                  <Grid sm={6} md />
                </GridContainer>
              )}
            </Stack>

            <Stack direction={'row'} flexWrap={'wrap'} alignContent={'center'}>
              <Stack
                direction={'row'}
                alignSelf={'center'}
                justifyContent={'space-between'}
                flexBasis={'100%'}
                marginBottom={2}
              >
                <Typography
                  sx={{ pl: 0.6 }}
                  variant='swiperTitle'
                  color='white'
                >
                  Интересные товары
                </Typography>

                <Stack
                  direction='row'
                  display={{ xs: 'none', md: 'flex' }}
                  justifyContent={'flex-end'}
                >
                  <SwiperButton color='white' className='swiper-button-prev'>
                    <PrevArrowSVG />
                  </SwiperButton>
                  <Box
                    position='relative'
                    zIndex={1}
                    width='150px'
                    overflow={'hidden'}
                  >
                    <SwiperPagination
                      sx={{ position: 'absolute!important' }}
                      className='swiper-pagination2'
                    />
                  </Box>
                  <SwiperButton color='white' className='swiper-button-next'>
                    <NextArrowSVG />
                  </SwiperButton>
                </Stack>
              </Stack>
              <SwiperStyled
                loop
                loopPreventsSliding={false}
                speed={300}
                slidesPerView={4}
                spaceBetween={30}
                threshold={1}
                mousewheel
                modules={[Pagination, Virtual, Navigation, Autoplay]}
                pagination={{
                  el: '.swiper-pagination2',
                  type: 'bullets',
                  dynamicBullets: true,
                  dynamicMainBullets: 3,
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
                breakpoints={{
                  [theme.breakpoints.values.lg]: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                  },

                  [theme.breakpoints.values.md]: {
                    spaceBetween: 15,
                    slidesPerView: 4,
                  },

                  [theme.breakpoints.values.sm]: {
                    spaceBetween: 7,
                    slidesPerView: 3,
                  },

                  [theme.breakpoints.values.xs]: {
                    spaceBetween: 6,
                    slidesPerView: 2,
                  },
                }}
                // virtual
              >
                {Object.values(goods).map(good => (
                  <SwiperSlide key={good.id} virtualIndex={good.id}>
                    <ImageButton component={Link} to={'/'}>
                      <Box
                        loading='lazy'
                        component='img'
                        sx={theme => ({
                          position: 'relative',
                          zIndex: -10,
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

                      <ImageContent>
                        <Stack alignItems='center' spacing={2}>
                          <Typography variant='productImageContent'>
                            Название товара
                          </Typography>
                          <Typography
                            variant='productImageContent'
                            sx={{ fontWeight: 600 }}
                          >
                            Цена ₽
                          </Typography>
                        </Stack>
                        <Typography variant='productImageContent'>
                          Категория товара
                        </Typography>
                      </ImageContent>
                    </ImageButton>
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
          </InterestingGoodsWrapper>
        </Container>
      </WaveClipPathBackground>
      {isPhone && (
        <SocialMediaCard sx={{ position: 'relative', top: '-120px' }} />
      )}
    </>
  );
};

export default InterestingGoods;
