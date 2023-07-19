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

export const FAQWrapper = styled('div')(({ theme }) => ({
  minHeight: '1600px',

  [theme.breakpoints.down('md')]: {
    minHeight: '1300px',
    paddingBottom: theme.typography.pxToRem(100),
  },
}));

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
))(({ theme }) => ({
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  margin: '12px 0',

  '& .MuiAccordionSummary-content': {
    flexGrow: 0,
    margin: 0,
  },

  '& .MuiAccordionSummary-expandIconWrapper': {},

  '& .MuiSvgIcon-root': {
    [theme.breakpoints.down('md')]: {
      width: '20px',
      lineHeight: 1,
    },
  },

  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
  },
}));

export const AccordionDetails = styled((props: AccordionDetailsProps) => (
  <MuiAccordionDetails {...props} />
))(({ theme }) => ({
  maxWidth: theme.typography.pxToRem(800),

  [theme.breakpoints.down('md')]: {
    maxWidth: theme.typography.pxToRem(520),
  },
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
      fontSize: 'clamp(1.7rem, 2.3vw + 1.1rem, 2.2rem)',
      alignSelf: 'center',
      position: 'relative',
      bottom: '3px',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 'clamp(1rem, 1.9vw + 1rem, 1.5rem)',
    },
  },

  '& > span:nth-of-type(2)': {
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(26),
    marginRight: theme.typography.pxToRem(10),

    [theme.breakpoints.down('md')]: {
      fontSize: 'clamp(1rem, 1.4vw + 0.6rem, 1.3rem)',
      alignSelf: 'center',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 'clamp(0.1rem, 3.4vw + 0.1rem, 1rem)',
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
