"use client";
import React from 'react';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { motion } from 'framer-motion';

const MovieSection = ({
  title,
  children,
  onPrevClick,
  onNextClick,
  canPrev,
  canNext,
  className = '',
  sx = {}
}) => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        padding: '0.125rem 0',
        paddingTop: '2rem',
        margin: '0',
        width: '100%',
        maxWidth: '100%',
        overflow: 'visible',
        backgroundColor: 'transparent',
        position: 'relative',
        ...sx
      }}
    >
    

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.25rem',
          padding: '0',
          paddingRight: '0.125rem'
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: 'orange',
            fontSize: '1.5rem',
            fontWeight: 600,
            paddingLeft: '0.125rem',
            '@media (max-width: 600px)': {
              fontSize: '1.2rem',
            },
            '@media (max-width: 425px)': {
              fontSize: '1rem',
            },
            '@media (max-width: 350px)': {
              fontSize: '0.9rem',
            }
          }}
        >
          {title}
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            onClick={onPrevClick}
            disabled={!canPrev}
            sx={{
              backgroundColor: 'orange',
              color: 'white',
              '&:hover': {
                backgroundColor: '#ff8c00'
              },
              '&.Mui-disabled': {
                backgroundColor: theme.palette.action.disabledBackground
              },
              '@media (max-width: 600px)': {
                width: '30px',
                height: '30px',
              },
              '@media (max-width: 425px)': {
                width: '25px',
                height: '25px',
              },
              '@media (max-width: 350px)': {
                width: '20px',
                height: '20px',
              }
            }}
          >
            <ArrowLeftIcon sx={{
              '@media (max-width: 600px)': {
                fontSize: '1.2rem',
              },
              '@media (max-width: 425px)': {
                fontSize: '1rem',
              },
              '@media (max-width: 350px)': {
                fontSize: '0.9rem',
              }
            }} />
          </IconButton>
          
          <IconButton
            onClick={onNextClick}
            disabled={!canNext}
            sx={{
              backgroundColor: 'orange',
              color: 'white',
              '&:hover': {
                backgroundColor: '#ff8c00'
              },
              '&.Mui-disabled': {
                backgroundColor: theme.palette.action.disabledBackground
              },
              '@media (max-width: 600px)': {
                width: '30px',
                height: '30px',
              },
              '@media (max-width: 425px)': {
                width: '25px',
                height: '25px',
              },
              '@media (max-width: 350px)': {
                width: '20px',
                height: '20px',
              }
            }}
          >
            <ArrowRightIcon sx={{
              '@media (max-width: 600px)': {
                fontSize: '1.2rem',
              },
              '@media (max-width: 425px)': {
                fontSize: '1rem',
              },
              '@media (max-width: 350px)': {
                fontSize: '0.9rem',
              }
            }} />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: '1.5rem',
          overflowX: 'auto',
          padding: '0.5rem 0',
          paddingLeft: '0.125rem',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          '& > *': {
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
            '@media (max-width: 600px)': {
              marginTop: '0.4rem',
              marginBottom: '0.4rem',
            },
            '@media (max-width: 425px)': {
              marginTop: '0.3rem',
              marginBottom: '0.3rem',
            },
            '@media (max-width: 350px)': {
              marginTop: '0.2rem',
              marginBottom: '0.2rem',
            }
          }
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MovieSection; 