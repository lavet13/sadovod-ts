import { Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import {
  BucketIcon,
  CalcIcon,
  DiscountCardIcon,
  FooterBackground,
  FooterButton,
  FooterContainer,
  GooglePlayIcon,
  OKIcon,
  TelIcon,
  VKIcon,
} from './footer.styles';

const Footer = () => {
  return (
    <FooterBackground>
      <FooterContainer>
        <Grid container width='100%' columns={24}>
          <Grid md />
          <Grid xs={24} md={11}>
            <Stack alignItems='flex-start'>
              <FooterButton color='white' startIcon={<GooglePlayIcon />}>
                Наше мобильное приложение
              </FooterButton>
              <FooterButton color='white' startIcon={<BucketIcon />}>
                Доставка с рынков Ростова-на-Дону
              </FooterButton>

              <FooterButton
                color='white'
                startIcon={<CalcIcon />}
                sx={{ marginTop: { xs: 0, md: 1.5 } }}
              >
                Калькулятор доставки
              </FooterButton>
            </Stack>
          </Grid>
          <Grid xs={24} sm={12} md={6}>
            <Stack
              alignItems='flex-start'
              direction={{ xs: 'column-reverse', md: 'column' }}
            >
              <FooterButton color='white' startIcon={<TelIcon />}>
                +38(071)516-25-12
              </FooterButton>
              <FooterButton
                color='white'
                startIcon={<TelIcon />}
                sx={{ marginTop: { xs: 6, md: 'initial' } }}
              >
                +7(928)214-88-82
              </FooterButton>
              <FooterButton
                color='white'
                startIcon={<DiscountCardIcon />}
                sx={{ marginTop: { xs: 0, md: 1.5 } }}
              >
                Скидочные карты
              </FooterButton>
            </Stack>
          </Grid>
          <Grid
            xs={24}
            sm={12}
            md={6}
            marginTop={{ xs: 'auto', md: 'initial' }}
          >
            <Stack alignItems='flex-start'>
              <FooterButton color='white' startIcon={<VKIcon />}>
                ВКонтаке
              </FooterButton>
              <FooterButton color='white' startIcon={<OKIcon />}>
                Одноклассники
              </FooterButton>
            </Stack>
          </Grid>
          <Grid md />
        </Grid>
      </FooterContainer>
    </FooterBackground>
  );
};

export default Footer;
