import { Divider } from '@mui/material';
import Hero from '../components/hero/hero.component';
import Catalogues from '../components/catalogues/catalogues.component';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Divider
        variant='fullWidth'
        color='secondary'
        sx={theme => ({
          borderColor: theme.palette.secondary.main,
          borderWidth: 10,
          boxShadow: theme.shadows[1],
        })}
      />
      <Catalogues />
    </>
  );
};

export default HomePage;
