import {
  Accordion,
  AccordionSummary,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { FAQWrapper } from './faq.styles';
import { useState } from 'react';

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <FAQWrapper>
      <Container sx={{ height: '700px' }}>
        <Stack>
          <Typography>FAQ</Typography>
          <Typography>Часто задаваемые вопросы:</Typography>
          <Accordion expanded={expanded === 'panel1'}>
            <AccordionSummary></AccordionSummary>
          </Accordion>
        </Stack>
      </Container>
    </FAQWrapper>
  );
};

export default FAQ;
