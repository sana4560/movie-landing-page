'use client';
import React from 'react';
import { Card, CardMedia, Button, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './CardMovie.css';

const CardMovie = ({ movie }) => {
    return (
        <Card className='card-movie-main'>
            <Button 
                className='card-movie-button'
                variant="outlined" 
                sx={{
                    position: 'relative',
                    backgroundImage: `url(${movie.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                 
                  height:'450px',
                    textTransform: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    '&:hover': {
                        backgroundImage: `url(${movie.image})`,
                        opacity: 0.9,
                    },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(50, 50, 50, 0.4)',
                        zIndex: 1,
                    }
                }}
                href={movie.trailer} 
                target="_blank"
            >
                <Box sx={{ zIndex: 2 }} className="trailer-button">
                    Trailer <PlayArrowIcon />
                </Box>
            </Button>
            <CardMedia
                component="img"
                height="84%"
                image={movie.image}
                alt={movie.title}
                sx={{ borderRadius: '10px' }}
            />
        </Card>
    );
};

export default CardMovie;

