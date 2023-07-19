import {
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  ClipPathGreenBackground,
  SocialMediaWrapper,
} from './social-media.styles';
import Grid from '@mui/material/Unstable_Grid2';
import SocialMediaCard from '../social-media-card/social-media-card.component';

const SocialMedia = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {!isPhone && (
        <SocialMediaWrapper>
          <ClipPathGreenBackground />
          <Container sx={{ height: `300px` }}>
            <Grid container height={300}>
              <Grid md />
              <Grid md={6} lg={5} alignSelf={'center'}>
                <Typography variant='socialTitle' color='white' noWrap>
                  Войди/Зарегистрируйся
                </Typography>
                <Typography variant='socialSubtitle' color='white' noWrap>
                  Чтобы оформить заказ
                </Typography>
                <Button
                  variant='md-btn'
                  color='secondary'
                  sx={{ marginTop: 2, px: 6 }}
                >
                  Войти
                </Button>
              </Grid>
              <Grid md />
              <Grid xs={12} md={5} lg={4} alignSelf={'flex-end'}>
                <SocialMediaCard sx={{ position: 'relative', top: 50 }} />
              </Grid>
              <Grid md />
            </Grid>
          </Container>
        </SocialMediaWrapper>
      )}
    </>
  );
};

export default SocialMedia;
