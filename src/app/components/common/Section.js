"use client";
import React from 'react';
import { Box, useTheme } from '@mui/material';
import SectionHeading from './SectionHeading';
import Container from './Container';

const Section = ({ 
  children, 
  title, 
  subtitle,
  background = 'default',
  padding = true,
  className = '',
  containerClassName = '',
  headingClassName = '',
  contentClassName = '',
  containerProps = {},
  headingProps = {},
  contentProps = {},
  ...props 
}) => {
  const theme = useTheme();
  
  // Determine background color based on prop
  const getBackgroundColor = () => {
    switch (background) {
      case 'primary':
        return theme.palette.primary.main;
      case 'secondary':
        return theme.palette.secondary.main;
      case 'dark':
        return '#121212';
      case 'light':
        return theme.palette.background.paper;
      case 'default':
      default:
        return theme.palette.background.default;
    }
  };
  
  // Determine text color based on background
  const getTextColor = () => {
    if (background === 'primary' || background === 'secondary' || background === 'dark') {
      return '#ffffff';
    }
    return 'inherit';
  };
  
  // Determine padding based on prop
  const getPadding = () => {
    if (!padding) return 0;
    return { py: 6, px: { xs: 2, md: 4 } };
  };
  
  return (
    <Box
      className={`section ${className}`}
      sx={{
        width: '100%',
        backgroundColor: getBackgroundColor(),
        color: getTextColor(),
        ...getPadding(),
        ...props.sx
      }}
      {...props}
    >
      <Container className={containerClassName} {...containerProps}>
        {(title || subtitle) && (
          <SectionHeading 
            title={title} 
            subtitle={subtitle}
            className={headingClassName}
            {...headingProps}
          />
        )}
        
        <Box 
          className={`section-content ${contentClassName}`}
          {...contentProps}
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default Section; 