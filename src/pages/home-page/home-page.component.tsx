import { Divider, useMediaQuery, useTheme } from '@mui/material';
import Hero from '../../components/hero/hero.component';
import Catalogues from '../../components/catalogues/catalogues.component';
import InterestingGoods from '../../components/interesting-goods/interesting-goods.component';
import { HomeBackground } from './home-page.styles';
import SocialMedia from '../../components/social-media/social-media.component';
import FAQ from '../../components/faq/faq.component';

const HomePage = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <HomeBackground />
      <Hero />
      {!isPhone && (
        <Divider
          variant='fullWidth'
          color='secondary'
          sx={theme => ({
            borderColor: theme.palette.secondary.main,
            borderWidth: 10,
            boxShadow: theme.shadows[1],
          })}
        />
      )}
      <Catalogues />
      <InterestingGoods />
      <SocialMedia />
      <FAQ />
    </>
  );
};

export default HomePage;
