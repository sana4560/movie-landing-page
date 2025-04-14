"use client";
import React from 'react';
import { Box, CircularProgress, Typography, useTheme } from '@mui/material';

const LoadingSpinner = ({ 
  size = 40, 
  thickness = 4,
  message = 'Loading...',
  fullScreen = false,
  className = '',
  sx = {},
  ...props 
}) => {
  const theme = useTheme();
  
  return (
    <Box
      className={`loading-spinner ${className}`}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: fullScreen ? '100vw' : '100%',
        height: fullScreen ? '100vh' : '200px',
        backgroundColor: fullScreen ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
        position: fullScreen ? 'fixed' : 'relative',
        top: fullScreen ? 0 : 'auto',
        left: fullScreen ? 0 : 'auto',
        zIndex: fullScreen ? 9999 : 'auto',
        ...sx
      }}
      {...props}
    >
      <CircularProgress 
        size={size} 
        thickness={thickness}
        sx={{ 
          color: theme.palette.primary.main,
          mb: message ? 2 : 0
        }}
      />
      
      {message && (
        <Typography 
          variant="body1" 
          color={fullScreen ? 'white' : 'text.secondary'}
          sx={{ fontWeight: 500 }}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default LoadingSpinner; 