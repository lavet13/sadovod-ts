import { Button, Stack } from '@mui/material';

import {
  BucketIcon,
  CalcIcon,
  DiscountCardIcon,
  FooterBackground,
  FooterContainer,
  GooglePlayIcon,
  OKIcon,
  TelIcon,
  VKIcon,
} from './footer.styles';
import Grid from '@mui/material/Unstable_Grid2';

const Footer = () => {
  return (
    <FooterBackground>
      <FooterContainer>
        <Grid container width='100%'>
          <Grid md />
          <Grid xs={12} md={5}>
            <Stack alignItems='flex-start'>
              <Button
                variant='footer-link'
                color='white'
                startIcon={<GooglePlayIcon />}
              >
                Наше мобильное приложение
              </Button>
              <Button
                variant='footer-link'
                color='white'
                startIcon={<BucketIcon />}
              >
                Доставка с рынков Ростова-на-Дону
              </Button>

              <Button
                variant='footer-link'
                color='white'
                startIcon={<CalcIcon />}
                sx={{ marginTop: { xs: 0, md: 1.5 } }}
              >
                Калькулятор доставки
              </Button>
            </Stack>
          </Grid>
          <Grid xs={6} md={3}>
            <Stack
              alignItems='flex-start'
              direction={{ xs: 'column-reverse', md: 'column' }}
            >
              <Button
                variant='footer-link'
                color='white'
                startIcon={<TelIcon />}
              >
                +38(071)516-25-12
              </Button>
              <Button
                variant='footer-link'
                color='white'
                startIcon={<TelIcon />}
                sx={{ marginTop: { xs: 6, md: 'initial' } }}
              >
                +7(928)214-88-82
              </Button>
              <Button
                variant='footer-link'
                color='white'
                startIcon={<DiscountCardIcon />}
                sx={{ marginTop: { xs: 0, md: 1.5 } }}
              >
                Скидочные карты
              </Button>
            </Stack>
          </Grid>
          <Grid xs={6} md={2} marginTop={{ xs: 'auto', md: 'initial' }}>
            <Stack alignItems='flex-start'>
              <Button
                variant='footer-link'
                color='white'
                startIcon={<VKIcon />}
              >
                ВКонтаке
              </Button>
              <Button
                variant='footer-link'
                color='white'
                startIcon={<OKIcon />}
              >
                Однокласники
              </Button>
            </Stack>
          </Grid>
          <Grid md />
        </Grid>
      </FooterContainer>
    </FooterBackground>
  );
};

export default Footer;
