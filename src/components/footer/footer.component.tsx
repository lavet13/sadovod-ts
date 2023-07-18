import { Button, Container } from '@mui/material';

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

const Footer = () => {
  return (
    <>
      <FooterBackground>
        <Container
          sx={({ typography: { pxToRem } }) => ({ height: pxToRem(300) })}
        >
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
          <Button variant='footer-link' color='white' startIcon={<TelIcon />}>
            +38(071)516-25-12
          </Button>
          <Button variant='footer-link' color='white' startIcon={<TelIcon />}>
            +7(928)214-88-82
          </Button>
          <Button variant='footer-link' color='white' startIcon={<VKIcon />}>
            ВКонтаке
          </Button>
          <Button variant='footer-link' color='white' startIcon={<OKIcon />}>
            Однокласники
          </Button>
          <Button variant='footer-link' color='white' startIcon={<CalcIcon />}>
            Калькулятор доставки
          </Button>
          <Button
            variant='footer-link'
            color='white'
            startIcon={<DiscountCardIcon />}
          >
            Скидочные карты
          </Button>
        </Container>
      </FooterBackground>
    </>
  );
};

export default Footer;
