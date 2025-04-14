"use client";
import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';

const Container = ({ 
  children, 
  maxWidth = 'lg', 
  fluid = false,
  padding = true,
  className = '',
  sx = {},
  ...props 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Determine max width based on prop
  const getMaxWidth = () => {
    if (fluid) return '100%';
    
    switch (maxWidth) {
      case 'xs':
        return '444px';
      case 'sm':
        return '600px';
      case 'md':
        return '900px';
      case 'lg':
        return '1200px';
      case 'xl':
        return '1536px';
      default:
        return maxWidth;
    }
  };
  
  // Determine padding based on screen size
  const getPadding = () => {
    if (!padding) return 0;
    
    if (isMobile) {
      return '0 16px';
    }
    
    return '0 24px';
  };
  
  return (
    <Box
      className={`container ${className}`}
      sx={{
        width: '100%',
        maxWidth: getMaxWidth(),
        margin: '0 auto',
        padding: getPadding(),
        boxSizing: 'border-box',
        ...sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Container; 