import { Box } from '@mui/material';
import Footer from '../components/footer/footer.component';
import Header from '../components/header/header.component';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <Box
      position={'relative'}
      minHeight={'100vh'}
      display={'flex'}
      flexDirection={'column'}
    >
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default App;
