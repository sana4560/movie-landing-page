"use client";
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  useMediaQuery,
  ThemeProvider,
  createTheme 
} from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

// Create a default theme
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Ensure consistent font style
    body1: {
      fontSize: '16px',
      lineHeight: '1.6',
    },
    body2: {
      fontSize: '14px',
    },
    h2: {
      fontSize: '24px', // Adjusted for better readability
      fontWeight: 600,  // Slightly bold
    },
    h3: {
      fontSize: '10px', // Adjust heading size to fit within the FAQ layout
      fontWeight: 500,
    },
  },
});

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Now using theme directly

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null);
  };

  const faqItems = [
    {
      id: 'disclaimer',
      title: 'Disclaimer',
      content: 'Film Ghar provides content for entertainment purposes only. We do not guarantee the accuracy, completeness, or usefulness of any content.'
    },
    {
      id: 'subscription',
      title: 'Start Subscription',
      content: 'You can start your subscription by visiting our Plans page and selecting your preferred package. Payment will be required immediately.'
    },
    {
      id: 'payment',
      title: 'Payment Method',
      content: 'We accept all major credit cards, PayPal, and UPI payments. All transactions are secured with 256-bit SSL encryption.'
    },
    {
      id: 'refund',
      title: 'Refund Policy',
      content: 'We offer a 7-day money-back guarantee for new subscriptions. Refunds will be processed within 5-7 business days.'
    },
    {
      id: 'devices',
      title: 'Multiple Devices Simultaneously',
      content: 'You can stream on up to 4 devices simultaneously with our Premium plan. Basic plan allows only 1 device at a time.'
    }
  ];

  return (
    <Box sx={{
      padding: '1rem 0.25rem',
      margin: '0 auto',
      width: '100%',
      maxWidth: '100%',
      overflow: 'hidden',
      background: 'transparent',
      marginBottom: '2rem'
    }}>
      <Box sx={{
        maxWidth: "1280px",
        width: "100%",
        margin: '0 auto'
      }}>

        <Typography 
           variant="h5"
           sx={{
             color: 'orange',
             fontSize: '1.5rem',
             fontWeight: 600,
             paddingLeft: '5rem',
             marginBottom: '2rem',
             '@media (max-width: 600px)': {
               fontSize: '1.2rem',
               paddingLeft: '3rem',
               marginBottom: '1.5rem'
             },
             '@media (max-width: 425px)': {
               fontSize: '1rem',
               paddingLeft: '2rem',
               marginBottom: '1rem'
             },
             '@media (max-width: 350px)': {
               fontSize: '0.9rem',
               paddingLeft: '1rem',
               marginBottom: '0.8rem'
             }
           }}
        >
          Frequently Asked Questions
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2,
          '@media (max-width: 600px)': {
            gap: 1.5,
          },
          '@media (max-width: 425px)': {
            gap: 1,
          },
          '@media (max-width: 350px)': {
            gap: 0.8,
          }
        }}>
          {faqItems.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              sx={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(251, 248, 248, 0.93)',
                borderRadius: '50px !important',
                overflow: 'hidden',
                '&:before': {
                  display: 'none',
                },
                '&.Mui-expanded': {
                  borderRadius: '50px !important',
                  margin: '0',
                },
                '@media (max-width: 600px)': {
                  borderRadius: '16px !important',
                },
                '@media (max-width: 425px)': {
                  borderRadius: '14px !important',
                },
                '@media (max-width: 350px)': {
                  borderRadius: '12px !important',
                }
              }}
            >
              <AccordionSummary
                expandIcon={expanded === item.id ? <RemoveIcon /> : <AddIcon />}
                sx={{
                  color: 'white',
                  borderRadius: '12px',
                  '& .MuiAccordionSummary-content': {
                    margin: '12px 0',
                    '@media (max-width: 600px)': {
                      margin: '10px 0',
                    },
                    '@media (max-width: 425px)': {
                      margin: '8px 0',
                    },
                    '@media (max-width: 350px)': {
                      margin: '6px 0',
                    }
                  },
                  '& .MuiSvgIcon-root': {
                    color: 'orange',
                    '@media (max-width: 600px)': {
                      fontSize: '1.2rem',
                    },
                    '@media (max-width: 425px)': {
                      fontSize: '1rem',
                    },
                    '@media (max-width: 350px)': {
                      fontSize: '0.9rem',
                    }
                  }
                }}
              >
                <Typography 
                  sx={{ 
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    '@media (max-width: 600px)': {
                      fontSize: '1rem',
                    },
                    '@media (max-width: 425px)': {
                      fontSize: '0.9rem',
                    },
                    '@media (max-width: 350px)': {
                      fontSize: '0.8rem',
                    }
                  }}
                >
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  borderBottomLeftRadius: '20px',
                  borderBottomRightRadius: '20px',
                  padding: '16px',
                  '@media (max-width: 600px)': {
                    padding: '14px',
                    borderBottomLeftRadius: '16px',
                    borderBottomRightRadius: '16px',
                  },
                  '@media (max-width: 425px)': {
                    padding: '12px',
                    borderBottomLeftRadius: '14px',
                    borderBottomRightRadius: '14px',
                  },
                  '@media (max-width: 350px)': {
                    padding: '10px',
                    borderBottomLeftRadius: '12px',
                    borderBottomRightRadius: '12px',
                  }
                }}
              >
                <Typography 
                  sx={{ 
                    fontSize: '0.95rem',
                    '@media (max-width: 600px)': {
                      fontSize: '0.9rem',
                    },
                    '@media (max-width: 425px)': {
                      fontSize: '0.85rem',
                    },
                    '@media (max-width: 350px)': {
                      fontSize: '0.8rem',
                    }
                  }}
                >
                  {item.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;
