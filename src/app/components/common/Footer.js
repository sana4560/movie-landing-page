"use client";
import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from 'next/image';

const Footer = ({ 
  logo = "/assets/images/logo.svg",
  logoWidth = 120,
  logoHeight = 50,
  className = '',
  sx = {},
  ...props 
}) => {
  const theme = useTheme();
  
  // Footer links
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
        { label: 'Blog', href: '/blog' },
      ]
    },
    {
      title: 'Movies',
      links: [
        { label: 'New Releases', href: '/movies/new' },
        { label: 'Coming Soon', href: '/movies/coming-soon' },
        { label: 'Top Rated', href: '/movies/top-rated' },
        { label: 'Popular', href: '/movies/popular' },
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'FAQ', href: '/faq' },
      ]
    }
  ];
  
  // Social media links
  const socialLinks = [
    { icon: <FacebookIcon />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <TwitterIcon />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <InstagramIcon />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <YouTubeIcon />, href: 'https://youtube.com', label: 'YouTube' },
  ];
  
  return (
    <Box
      component="footer"
      className={`footer ${className}`}
      sx={{
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        padding: { xs: '40px 0 20px', md: '60px 0 30px' },
        borderTop: `1px solid ${theme.palette.divider}`,
        ...sx
      }}
      {...props}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Image
                src={logo}
                alt="Film Ghar Logo"
                width={logoWidth}
                height={logoHeight}
              />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Your ultimate destination for movies and entertainment. Watch the latest releases, explore classics, and discover new favorites.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{ 
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      color: theme.palette.primary.main,
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
          
          {/* Footer Links */}
          {footerLinks.map((section) => (
            <Grid item xs={12} sm={6} md={2} key={section.title}>
              <Typography 
                variant="h6" 
                component="h3" 
                sx={{ 
                  mb: 2,
                  color: theme.palette.text.primary,
                  fontWeight: 600
                }}
              >
                {section.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {section.links.map((link) => (
                  <Box 
                    component="li" 
                    key={link.label}
                    sx={{ mb: 1 }}
                  >
                    <Link
                      href={link.href}
                      color="text.secondary"
                      sx={{ 
                        textDecoration: 'none',
                        '&:hover': {
                          color: theme.palette.primary.main,
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
        
        {/* Copyright */}
        <Box 
          sx={{ 
            mt: 5, 
            pt: 3, 
            borderTop: `1px solid ${theme.palette.divider}`,
            textAlign: 'center'
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Film Ghar. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 