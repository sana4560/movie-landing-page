"use client";
import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Button from './Button';

const Header = ({ 
  logo = "/assets/images/logo.svg",
  logoWidth = 120,
  logoHeight = 50,
  loginIcon = "/assets/images/login.svg",
  loginIconWidth = 16,
  loginIconHeight = 16,
  transparent = false,
  fixed = true,
  className = '',
  sx = {},
  ...props 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  // Navigation items
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Movies', href: '/movies' },
    { label: 'TV Shows', href: '/tv-shows' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Determine header background based on scroll and transparent prop
  const getHeaderBackground = () => {
    if (transparent && !scrolled) {
      return 'transparent';
    }
    
    if (scrolled) {
      return 'rgba(0, 0, 0, 0.9)';
    }
    
    return theme.palette.background.paper;
  };
  
  return (
    <Box
      component="header"
      className={`header ${className}`}
      sx={{
        width: '100%',
        position: fixed ? 'fixed' : 'relative',
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: getHeaderBackground(),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: { xs: '12px 16px', md: '16px 40px' },
        boxSizing: 'border-box',
        height: { xs: '60px', md: '80px' },
        color: 'white',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        ...sx
      }}
      {...props}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src={logo}
            alt="Film Ghar Logo"
            width={logoWidth}
            height={logoHeight}
          />
          
          {!isMobile && (
            <Box 
              component="nav" 
              sx={{ 
                ml: 4, 
                display: 'flex', 
                gap: 2 
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="text"
                  color="inherit"
                  href={item.href}
                  sx={{ 
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isMobile ? (
            <IconButton
              color="inherit"
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Button
              variant="contained"
              color="error"
              startIcon={
                <Image
                  src={loginIcon}
                  width={loginIconWidth}
                  height={loginIconHeight}
                  alt="Sign In"
                />
              }
              animate
            >
              Sign In
            </Button>
          )}
        </Box>
      </Container>
      
      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        PaperProps={{
          sx: {
            width: '80%',
            maxWidth: '300px',
            backgroundColor: theme.palette.background.paper,
          }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={toggleMobileMenu} aria-label="Close Menu">
            <CloseIcon />
          </IconButton>
        </Box>
        
        <List>
          {navItems.map((item) => (
            <ListItem 
              key={item.label} 
              button 
              component="a" 
              href={item.href}
              onClick={toggleMobileMenu}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          
          <ListItem sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="error"
              fullWidth
              startIcon={
                <Image
                  src={loginIcon}
                  width={loginIconWidth}
                  height={loginIconHeight}
                  alt="Sign In"
                />
              }
            >
              Sign In
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Header; 