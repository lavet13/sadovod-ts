import { Divider } from '@mui/material';
import Hero from '../components/hero/hero.component';

const HomePage = () => {
  return (
    <>
      <Hero></Hero>
      <Divider
        variant='fullWidth'
        color='secondary'
        sx={theme => ({
          borderColor: theme.palette.secondary.main,
          borderWidth: 10,
          boxShadow: theme.shadows[1],
        })}
      />
    </>
  );
};

export default HomePage;
