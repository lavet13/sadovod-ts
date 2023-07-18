import parse from 'html-react-parser';
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import BackgroundImage1 from '../../assets/images/bg1.png';
import BackgroundImage2 from '../../assets/images/bg2.png';

import { SwiperSlide } from 'swiper/react';
import {
  Pagination,
  Virtual,
  EffectCoverflow,
  Autoplay,
  Parallax,
} from 'swiper/modules';

import {
  CataloguesWrapper,
  SwiperContent,
  SwiperImg,
  SwiperLinearGradient,
  SwiperPagination,
  SwiperStyled,
} from './catalogues.styles';

const images = [
  {
    id: 1,
    url: BackgroundImage1,
    title:
      'Поможем купить и доставить за 7-14 дней с оптово-розничных рынков Москвы в ЛДНР и Крым, а также по всей РФ. <br/><br/>Возможна доставка до двери<br/> (только в ЛДНР)',
  },
  {
    id: 2,
    url: BackgroundImage2,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus at augue eget arcu dictum varius duis at. Aliquet enim tortor at auctor. Molestie at elementum eu facilisis. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Felis eget velit aliquet sagittis id consectetur purus. Diam vulputate ut pharetra sit amet. Consequat semper viverra nam libero justo. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Magna fringilla urna porttitor rhoncus dolor purus. In massa tempor nec feugiat.',
  },
  {
    id: 3,
    url: BackgroundImage1,
    title:
      'Поможем купить и доставить за 7-14 дней с оптово-розничных рынков Москвы в ЛДНР и Крым, а также по всей РФ. <br/><br/>Возможна доставка до двери<br/> (только в ЛДНР)',
  },
  {
    id: 4,
    url: BackgroundImage2,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus at augue eget arcu dictum varius duis at. Aliquet enim tortor at auctor. Molestie at elementum eu facilisis. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Felis eget velit aliquet sagittis id consectetur purus. Diam vulputate ut pharetra sit amet. Consequat semper viverra nam libero justo. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Magna fringilla urna porttitor rhoncus dolor purus. In massa tempor nec feugiat.',
  },
  {
    id: 5,
    url: BackgroundImage1,
    title:
      'Поможем купить и доставить за 7-14 дней с оптово-розничных рынков Москвы в ЛДНР и Крым, а также по всей РФ. <br/><br/>Возможна доставка до двери<br/> (только в ЛДНР)',
  },
];

const Catalogues = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {!isPhone && (
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
                className='swiper-pagination1'
              />
              <Button variant='long-btn'>Перейти в каталог</Button>
            </Stack>
            <SwiperStyled
              grabCursor
              parallax
              centeredSlides
              slidesPerView={1}
              speed={400}
              resistance={false}
              threshold={1}
              // effect='slide' // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards'
              // coverflowEffect={{ rotate: 90, slideShadows: false, scale: 0.7 }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Pagination, Virtual, Autoplay, Parallax]} // EffectCoverflow,
              pagination={{
                el: '.swiper-pagination1',
                type: 'bullets',
                // dynamicBullets: true,
                // dynamicMainBullets: 3,
                clickable: true,
              }}
              virtual
            >
              {images.map(step => (
                <SwiperSlide key={step.id} virtualIndex={step.id}>
                  <SwiperImg src={step.url} alt={''} />

                  <div className='swiper-lazy-preloader' />

                  <SwiperLinearGradient>
                    <SwiperContent>
                      <Typography variant='swiperText'>
                        {parse(step.title)}
                      </Typography>
                    </SwiperContent>
                  </SwiperLinearGradient>
                </SwiperSlide>
              ))}
            </SwiperStyled>
          </CataloguesWrapper>
        </Container>
      )}
    </>
  );
};

export default Catalogues;
