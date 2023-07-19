import { Button, CardProps, Stack, Typography } from '@mui/material';
import {
  OKIcon,
  VKIcon,
  Card,
  CardActions,
  CardContent,
} from './social-media-card.styles';

const SocialMediaCard = (props: CardProps) => {
  return (
    <Card elevation={2} {...props}>
      <Stack>
        <CardContent>
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
