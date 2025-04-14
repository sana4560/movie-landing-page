"use client";
import React from 'react';
import { Button as MuiButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'contained', 
  color = 'primary', 
  size = 'medium',
  startIcon,
  endIcon,
  fullWidth = false,
  disabled = false,
  href,
  target,
  rel,
  onClick,
  className = '',
  sx = {},
  animate = false,
  ...props 
}) => {
  const theme = useTheme();
  
  // Default styles based on theme
  const defaultStyles = {
    borderRadius: '20px',
    textTransform: 'none',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    ...sx
  };
  
  // Animation variants
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
    },
    tap: { 
      scale: 0.95 
    }
  };
  
  const buttonContent = (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      disabled={disabled}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={className}
      sx={defaultStyles}
      {...props}
    >
      {children}
    </MuiButton>
  );
  
  // Return animated or regular button
  if (animate) {
    return (
      <motion.div
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        {buttonContent}
      </motion.div>
    );
  }
  
  return buttonContent;
};

export default Button; 