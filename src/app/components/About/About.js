import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import styles from './About.module.css';

const About = () => {
  const features = [
    {
      icon: '/assets/images/Icon 1.svg',
      title: 'Enjoy movie on the every devices',
      description: 'Watch your favorite movies on Mobile, Tablet, TV with Chromecast*, Airplay support*.'
    },
    {
      icon: '/assets/images/icon 2.svg',
      title: 'Manage Device',
      description: 'You can add or remove device anytime from your Video app manage device tab. If you need more devices, please updrade your plan.'
    },
    {
      icon: '/assets/images/icon 3.svg',
      title: 'Easy Payment',
      description: 'Pay with your VISA, Mastercard, Esewa, Khalti and Apple In app purchase.'
    },
    {
      icon: '/assets/images/icon 4.svg',
      title: 'Watch from Everywhere',
      description: 'It is available for global customer but charges and fees may different due to the taxation system of each country.'
    }
  ];

  return (
    <Box className={styles.container}>
      <Box className={styles.centerDiv}>
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
          Why Choose Film Ghar?
        </Typography>

        <Grid container spacing={4} justifyContent="center" className={styles.gridContainer}>
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card className={styles.card}>
                <CardContent sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  padding: '1rem',
                  '@media (max-width: 600px)': {
                    padding: '0.8rem',
                  },
                  '@media (max-width: 425px)': {
                    padding: '0.6rem',
                  },
                  '@media (max-width: 350px)': {
                    padding: '0.5rem',
                  }
                }}>
                  <Box className={styles.iconWrapper}>
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className={styles.icon}
                    />
                  </Box>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    className={styles.title}
                    sx={{
                      '@media (max-width: 600px)': {
                        fontSize: '18px !important',
                      },
                      '@media (max-width: 425px)': {
                        fontSize: '16px !important',
                      },
                      '@media (max-width: 350px)': {
                        fontSize: '14px !important',
                      }
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    className={styles.description}
                    sx={{
                      '@media (max-width: 600px)': {
                        fontSize: '14px !important',
                      },
                      '@media (max-width: 425px)': {
                        fontSize: '12px !important',
                      },
                      '@media (max-width: 350px)': {
                        fontSize: '11px !important',
                      }
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default About;