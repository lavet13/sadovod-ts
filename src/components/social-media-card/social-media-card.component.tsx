import {
  Button,
  CardContent,
  CardProps,
  Stack,
  Typography,
} from '@mui/material';
import { OKIcon, VKIcon, Card, CardActions } from './social-media-card.styles';

const SocialMediaCard = (props: CardProps) => {
  return (
    <Card elevation={2} {...props}>
      <Stack>
        <CardContent
          sx={({ typography: { pxToRem } }) => ({
            padding: {
              xs: `${pxToRem(20)} ${pxToRem(40)}`,
              sm: `${pxToRem(23)} ${pxToRem(30)}`,
              md: `${pxToRem(23)} ${pxToRem(30)}`,
            },
          })}
        >
          <Typography variant='socialTitle' color='secondary'>
            Мы в соц. сетях
          </Typography>
        </CardContent>
        <CardActions>
          <Stack
            direction={'row'}
            spacing={{ xs: 2, md: 3 }}
            width={'100%'}
            marginBottom={2}
          >
            <VKIcon />
            <Button
              variant='md-btn'
              sx={{
                alignSelf: 'center',
                width: '100%',
                flexShrink: 1,
                flexGrow: 1,
              }}
            >
              ВКонтакте
            </Button>
          </Stack>
          <Stack
            direction='row'
            justifyContent={'space-between'}
            spacing={{ xs: 2, md: 3 }}
            width={'100%'}
          >
            <OKIcon />
            <Button
              variant='md-btn'
              sx={{ alignSelf: 'center', width: '100%', flexShrink: 1 }}
            >
              Одноклассники
            </Button>
          </Stack>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default SocialMediaCard;
