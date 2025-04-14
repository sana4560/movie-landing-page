"use client";
import React from 'react';
import { Card, CardMedia, Button, Box, Typography, useTheme } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { motion } from 'framer-motion';

const MovieCard = ({ 
  movie, 
  showTrailer = true, 
  showTitle = true, 
  height = "450px",
  width = "100%",
  isCenter = false,
  className = ""
}) => {
  const theme = useTheme();
  
  return (
    <Card 
      className={`movie-card ${className}`}
      sx={{
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
        },
        width: isCenter ? 'calc(100% + 40px)' : width,
        transform: isCenter ? 'scale(1.1)' : 'none',
        zIndex: isCenter ? 1 : 'auto',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ position: 'relative', height: height }}>
        {showTrailer && movie.trailer && (
          <Button 
            className='trailer-button'
            variant="outlined" 
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                borderColor: theme.palette.primary.main,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
            href={movie.trailer} 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              Trailer <PlayArrowIcon />
            </Box>
          </Button>
        )}
        
        <CardMedia
          component="img"
          height="100%"
          image={movie.image}
          alt={movie.title}
          sx={{ 
            objectFit: 'cover',
            transition: 'opacity 0.3s ease',
            '&:hover': {
              opacity: 0.9,
            }
          }}
        />
        
        {showTitle && (
          <Box 
            sx={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              bgcolor: 'rgba(0,0,0,0.7)',
              p: 2,
              color: 'white'
            }}
          >
            <Typography variant="h6" component="h3" noWrap>
              {movie.title}
            </Typography>
            {movie.year && (
              <Typography variant="body2" color="text.secondary">
                {movie.year}
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default MovieCard; 