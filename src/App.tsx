import { Divider } from '@mui/material';
import Hero from './components/hero/hero.component';
import Header from './components/header/header.component';

function App() {
  return (
    <>
      <Header></Header>
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
}

export default App;
