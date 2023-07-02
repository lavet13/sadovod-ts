import CalculatorPage from './calculator-page.component';
import CatalogsPage from './catalogs-page.component';
import DeliveryPage from './delivery-page.component';
import DiscountPage from './discount-page.component';
import HomePage from './home-page.component';
import MobilePage from './mobile-page.component';
import SignInPage from './sign-in-page.component';

export enum PATHS {
  HOME_PAGE = '/',
  CATALOGS_PAGE = '/catalogs',
  DELIVERY_PAGE = '/delivery',
  DISCOUNT_PAGE = '/discount',
  CALCULATOR_PAGE = '/calculator',
  MOBILE_PAGE = '/mobile-app',
  SIGN_IN_PAGE = '/sign-in',
}

export const PAGES = [
  { title: 'Главная', path: PATHS.HOME_PAGE },
  { title: 'Каталог', path: PATHS.CATALOGS_PAGE },
  { title: 'Оплата и доставка', path: PATHS.DELIVERY_PAGE },
  { title: 'Скидочная карта', path: PATHS.DISCOUNT_PAGE },
  {
    title: 'Калькулятор доставки',
    path: PATHS.CALCULATOR_PAGE,
  },
  {
    title: 'Мобильное приложение',
    path: PATHS.MOBILE_PAGE,
  },
  { title: 'Вход', path: PATHS.SIGN_IN_PAGE },
];

export const PAGES_COMPONENTS = {
  [PATHS.HOME_PAGE]: <HomePage />,
  [PATHS.CATALOGS_PAGE]: <CatalogsPage />,
  [PATHS.DELIVERY_PAGE]: <DeliveryPage />,
  [PATHS.DISCOUNT_PAGE]: <DiscountPage />,
  [PATHS.CALCULATOR_PAGE]: <CalculatorPage />,
  [PATHS.MOBILE_PAGE]: <MobilePage />,
  [PATHS.SIGN_IN_PAGE]: <SignInPage />,
};
