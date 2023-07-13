import { Box, Button, Container, Paper, Stack } from '@mui/material';

import BackgroundImage1 from '../../assets/images/bg1.png';
import BackgroundImage2 from '../../assets/images/bg2.png';

import { SwiperSlide } from 'swiper/react';
import { Pagination, Virtual, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import 'swiper/css/effect-coverflow';

import {
  CataloguesWrapper,
  SwiperPagination,
  SwiperStyled,
} from './catalogues.styles';

const images = [
  {
    url: BackgroundImage1,
  },
  {
    url: BackgroundImage2,
  },
  {
    url: BackgroundImage1,
  },
  {
    url: BackgroundImage2,
  },
];

const Catalogues = () => {
  return (
    <Container>
      <CataloguesWrapper>
        <Stack
          direction={'row'}
          alignSelf={'center'}
          justifyContent='space-between'
          width='100%'
          spacing={2}
          marginBottom={2}
        >
          <SwiperPagination
            sx={{ position: 'initial!important' }}
            className='swiper-pagination'
          />
          <Button variant='contained'>Перейти к каталогу</Button>
        </Stack>
        <SwiperStyled
          grabCursor
          centeredSlides
          slidesPerView={1}
          speed={400}
          resistance={false}
          threshold={1}
          // effect='slide' // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards'
          // coverflowEffect={{ rotate: 90, slideShadows: false, scale: 0.7 }}
          autoplay={{ delay: 15000 }}
          modules={[Pagination, Virtual, Autoplay]} // EffectCoverflow,
          pagination={{
            el: '.swiper-pagination',
            type: 'bullets',
            dynamicBullets: true,
            dynamicMainBullets: 2,
          }}
          virtual
        >
          {images.map((step, index) => (
            <SwiperSlide key={step.url} virtualIndex={index}>
              <Box
                loading='lazy'
                component='img'
                sx={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                src={step.url}
                alt={''}
              />
              <div className='swiper-lazy-preloader' />
            </SwiperSlide>
          ))}
        </SwiperStyled>
      </CataloguesWrapper>
    </Container>
  );
};

export default Catalogues;
