import { Button, Container, Stack } from '@mui/material';

import {
  BucketIcon,
  CalcIcon,
  DiscountCardIcon,
  FooterBackground,
  GooglePlayIcon,
  OKIcon,
  TelIcon,
  VKIcon,
} from './footer.styles';
import Grid from '@mui/material/Unstable_Grid2';

const Footer = () => {
  return (
    <FooterBackground>
      <Container
        sx={({ typography: { pxToRem } }) => ({
          height: pxToRem(250),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        })}
      >
        <Grid container width='100%'>
          <Grid xs />
          <Grid xs={5}>
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
                sx={{ marginTop: 1.5 }}
              >
                Калькулятор доставки
              </Button>
            </Stack>
          </Grid>
          <Grid xs={3}>
            <Stack alignItems='flex-start'>
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
              >
                +7(928)214-88-82
              </Button>
              <Button
                variant='footer-link'
                color='white'
                startIcon={<DiscountCardIcon />}
                sx={{ marginTop: 1.5 }}
              >
                Скидочные карты
              </Button>
            </Stack>
          </Grid>
          <Grid xs={2}>
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
          <Grid xs />
        </Grid>
      </Container>
    </FooterBackground>
  );
};

export default Footer;
