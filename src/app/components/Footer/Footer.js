"use client";
import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack, useMediaQuery, ThemeProvider, createTheme } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Use a consistent font family
    body1: {
      fontSize: '16px', // Body text size uniform
      lineHeight: '1.6', // Proper line height
    },
    body2: {
      fontSize: '14px', // Body text size for smaller text like copyright
    },
    h2: {
      fontSize: '22px', // Consistent heading font size
      fontWeight: 600,  // Slightly bold for better clarity
    },
  },
});

const Footer = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Using theme directly

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "20px", padding: isMobile ? '10px' : '0' }}>
      <Box sx={{ maxWidth: "1280px", width: "100%", color: "white" }}>
        {/* App Store Badges - Centered Top */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
          <Stack direction="row" spacing={2}>
            <Box component="img" src="/assets/images/googleplay.svg" alt="Get it on Google Play" sx={{ height: 40 }} />
            <Box component="img" src="/assets/images/appstore.svg" alt="Download on the App Store" sx={{ height: 40 }} />
          </Stack>
        </Box>

        {/* Main Content */}
        <Grid container>
          <Grid item xs={12} sx={{ width: "100%" }}>
            <Stack spacing={3}>
              {/* Contact */}
              <Typography variant="body1" sx={{ fontSize: '16px' }}>
                Questions? Contact us
              </Typography>

              {/* Links Row */}
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 2,
                paddingX: 2, // Ensure padding around the content
              }}>
                {/* First Group - FAQ Links */}
                <Stack spacing={1} sx={{ minWidth: 210 }}>
                  <Link href="#" color="inherit" underline="hover">FAQ</Link>
                  <Link href="#" color="inherit" underline="hover">Help Center</Link>
                  <Link href="#" color="inherit" underline="hover">Account</Link>
                  <Link href="#" color="inherit" underline="hover">About Us</Link>
                </Stack>

                {/* Second Group - Policy Links */}
                <Stack spacing={1} sx={{ minWidth: 210 }}>
                  <Link href="#" color="inherit" underline="hover">Terms of Use</Link>
                  <Link href="#" color="inherit" underline="hover">Privacy</Link>
                  <Link href="#" color="inherit" underline="hover">Data Policy</Link>
                </Stack>

                {/* Third Group - Social Media */}
                <Stack spacing={1} sx={{ minWidth: 210 }}>
                  <Typography variant="body1">Follow Us</Typography>
                  <Stack direction="row" spacing={2}>
                    <Link href="#" color="inherit">
                      <Instagram fontSize="medium" />
                    </Link>
                    <Link href="#" color="inherit">
                      <Facebook fontSize="medium" />
                    </Link>
                    <Link href="#" color="inherit">
                      <YouTube fontSize="medium" />
                    </Link>
                    <Link href="#" color="inherit">
                      <Twitter fontSize="medium" />
                    </Link>
                  </Stack>
                </Stack>

                {/* Fourth Group - Logo and Copyright */}
                <Stack spacing={1} sx={{
                  minWidth: 120,
                  marginLeft: 'auto',
                  alignItems: 'flex-end',
                }}>
                  <Box component="img" src="/assets/images/logo-down.svg" alt="Website Logo" sx={{ height: 50 }} />
                  <Typography variant="body2">
                    © copyright Film Ghar, All rights reserved.
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
