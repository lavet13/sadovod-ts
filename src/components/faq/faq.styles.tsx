import { ExpandMore } from '@mui/icons-material';
import {
  AccordionProps,
  styled,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummaryProps,
  AccordionDetailsProps,
  TypographyProps,
  Typography,
} from '@mui/material';

export const FAQWrapper = styled('div')({
  minHeight: '1600px',
});

export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))({
  '&:not(:last-child)': {
    borderBottom: 0,
  },

  '&:before': {
    display: 'none',
  },
});

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ExpandMore color='primary' />} {...props} />
))({
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  margin: '12px 0',

  '& .MuiAccordionSummary-content': {
    flexGrow: 0,
    margin: 0,
  },

  '& .MuiAccordionSummary-expandIconWrapper': {},
});

export const AccordionDetails = styled((props: AccordionDetailsProps) => (
  <MuiAccordionDetails {...props} />
))(({ theme }) => ({
  maxWidth: theme.typography.pxToRem(800),
}));

export const AccordionTitle = styled((props: TypographyProps) => (
  <Typography {...props} />
))(({ theme }) => ({
  fontFamily: 'Eastman',
  display: 'flex',
  alignItems: 'flex-end',
  lineHeight: 1,

  '& > span:nth-of-type(1)': {
    color: theme.palette.primary.main,
    fontWeight: 800,
    fontSize: theme.typography.pxToRem(50),
    marginRight: theme.typography.pxToRem(10),

    [theme.breakpoints.down('md')]: {
      fontSize: 'clamp(0.8rem, 2.5vw + 0.8rem, 2rem)',
    },
  },

  '& > span:nth-of-type(2)': {
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(26),
    marginRight: theme.typography.pxToRem(10),

    [theme.breakpoints.down('md')]: {
      fontSize: 'clamp(0.6rem, 1.7vw + 0.6rem, 1.4rem)',
    },
  },
}));

export const AccordionText = styled((props: TypographyProps) => (
  <Typography {...props} />
))(({ theme }) => ({
  fontFamily: 'Eastman',
  fontWeight: 400,
  fontSize: theme.typography.pxToRem(25),

  [theme.breakpoints.down('md')]: {
    fontSize: 'clamp(0.5rem, 1.2vw + 0.5rem, 1.1rem)',
  },
}));
