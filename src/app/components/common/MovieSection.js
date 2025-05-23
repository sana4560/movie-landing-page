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
        padding: { xs: '0.25rem 0', sm: '0.125rem 0' },
        paddingTop: { xs: '0.25rem', sm: '0.5rem', md: '1rem' },
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
          marginBottom: { xs: '0.25rem', sm: '0.5rem' },
          padding: '0',
          paddingRight: '0.125rem'
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: 'orange',
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
            fontWeight: 600,
            paddingLeft: { xs: '0.5rem', sm: '1rem', md: '2rem' },
            '@media (max-width: 350px)': {
              fontSize: '1rem',
              paddingLeft: '0.25rem',
            }
          }}
        >
          {title}
        </Typography>
        
        <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1 } }}>
          <IconButton
            onClick={onPrevClick}
            disabled={!canPrev}
            sx={{
              backgroundColor: 'orange',
              color: 'white',
              width: { xs: '28px', sm: '32px', md: '40px' },
              height: { xs: '28px', sm: '32px', md: '40px' },
              '&:hover': {
                backgroundColor: '#ff8c00'
              },
              '&.Mui-disabled': {
                backgroundColor: theme.palette.action.disabledBackground
              }
            }}
          >
            <ArrowLeftIcon sx={{
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }
            }} />
          </IconButton>
          
          <IconButton
            onClick={onNextClick}
            disabled={!canNext}
            sx={{
              backgroundColor: 'orange',
              color: 'white',
              width: { xs: '28px', sm: '32px', md: '40px' },
              height: { xs: '28px', sm: '32px', md: '40px' },
              '&:hover': {
                backgroundColor: '#ff8c00'
              },
              '&.Mui-disabled': {
                backgroundColor: theme.palette.action.disabledBackground
              }
            }}
          >
            <ArrowRightIcon sx={{
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }
            }} />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: { xs: '0.75rem', sm: '1rem', md: '1.5rem' },
          overflowX: 'auto',
          padding: { xs: '0.25rem 0', sm: '0.5rem 0' },
          paddingLeft: { xs: '0.5rem', sm: '1rem' },
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          '& > *': {
            marginTop: { xs: '0.25rem', sm: '0.5rem' },
            marginBottom: { xs: '0.25rem', sm: '0.5rem' }
          }
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MovieSection; 