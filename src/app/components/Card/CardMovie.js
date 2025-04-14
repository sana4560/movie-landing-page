'use client';
import React from 'react';
import { Card, CardMedia, Button, Box, Typography } from '@mui/material';
import './CardMovie.css';

const CardMovie = ({ movie }) => {
    return (
        <Card 
            sx={{
                width: 280,
                height: 450,
                backgroundColor: 'transparent',
                borderRadius: '15px',
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.3s ease-in-out',
                border: '2px solid rgba(248, 247, 247, 0.3)',
                '&:hover': {
                    transform: 'translateY(-8px)',
                },
                '@media (max-width: 600px)': {
                    width: 220,
                    height: 350,
                    borderRadius: '10px',
                },
                '@media (max-width: 425px)': {
                    width: 180,
                    height: 280,
                    borderRadius: '8px',
                },
                '@media (max-width: 350px)': {
                    width: 150,
                    height: 240,
                    borderRadius: '6px',
                }
            }}
        >
            {/* Trailer Preview Section */}
            <Box
                component="a"
                href={movie.trailer}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    position: 'relative',
                    display: 'block',
                    width: '100%',
                    height: '90px',
                    overflow: 'hidden',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    borderBottom: '10px solid rgba(0, 0, 0, 0.9)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                    borderBottomLeftRadius: '25px',
                    borderBottomRightRadius: '25px',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1
                    },
                    '@media (max-width: 600px)': {
                        height: '70px',
                        borderBottom: '8px solid rgba(0, 0, 0, 0.9)',
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                        borderBottomLeftRadius: '20px',
                        borderBottomRightRadius: '20px',
                    },
                    '@media (max-width: 425px)': {
                        height: '60px',
                        borderBottom: '6px solid rgba(0, 0, 0, 0.9)',
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                        borderBottomLeftRadius: '15px',
                        borderBottomRightRadius: '15px',
                    },
                    '@media (max-width: 350px)': {
                        height: '50px',
                        borderBottom: '5px solid rgba(0, 0, 0, 0.9)',
                        borderTopLeftRadius: '6px',
                        borderTopRightRadius: '6px',
                        borderBottomLeftRadius: '12px',
                        borderBottomRightRadius: '12px',
                    }
                }}
            >
                <CardMedia
                    component="img"
                    image={movie.image}
                    alt={movie.title}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.7,
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                        borderBottomLeftRadius: '25px',
                        borderBottomRightRadius: '25px',
                        '@media (max-width: 600px)': {
                            borderTopLeftRadius: '10px',
                            borderTopRightRadius: '10px',
                            borderBottomLeftRadius: '20px',
                            borderBottomRightRadius: '20px',
                        },
                        '@media (max-width: 425px)': {
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px',
                            borderBottomLeftRadius: '15px',
                            borderBottomRightRadius: '15px',
                        },
                        '@media (max-width: 350px)': {
                            borderTopLeftRadius: '6px',
                            borderTopRightRadius: '6px',
                            borderBottomLeftRadius: '12px',
                            borderBottomRightRadius: '12px',
                        }
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                        zIndex: 2,
                        '@media (max-width: 600px)': {
                            padding: '6px 12px',
                            borderRadius: '15px',
                        },
                        '@media (max-width: 425px)': {
                            padding: '4px 10px',
                            borderRadius: '12px',
                        },
                        '@media (max-width: 350px)': {
                            padding: '3px 8px',
                            borderRadius: '10px',
                        }
                    }}
                >
                    <Typography
                        sx={{
                            color: 'white',
                            fontSize: '16px',
                            fontWeight: 500,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                            '&::after': {
                                content: '"▶"',
                                fontSize: '14px',
                                marginLeft: '4px'
                            },
                            '@media (max-width: 600px)': {
                                fontSize: '14px',
                                '&::after': {
                                    fontSize: '12px',
                                }
                            },
                            '@media (max-width: 425px)': {
                                fontSize: '12px',
                                '&::after': {
                                    fontSize: '10px',
                                }
                            },
                            '@media (max-width: 350px)': {
                                fontSize: '10px',
                                '&::after': {
                                    fontSize: '8px',
                                }
                            }
                        }}
                    >
                        Trailer
                    </Typography>
                </Box>
            </Box>

            {/* Main Movie Image */}
            <CardMedia
                component="img"
                image={movie.image}
                alt={movie.title}
                sx={{
                    height: 'calc(100% - 90px)',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                    borderBottomLeftRadius: '15px',
                    borderBottomRightRadius: '15px',
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                    '@media (max-width: 600px)': {
                        height: 'calc(100% - 70px)',
                        borderBottomLeftRadius: '10px',
                        borderBottomRightRadius: '10px',
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                    },
                    '@media (max-width: 425px)': {
                        height: 'calc(100% - 60px)',
                        borderBottomLeftRadius: '8px',
                        borderBottomRightRadius: '8px',
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                    },
                    '@media (max-width: 350px)': {
                        height: 'calc(100% - 50px)',
                        borderBottomLeftRadius: '6px',
                        borderBottomRightRadius: '6px',
                        borderTopLeftRadius: '6px',
                        borderTopRightRadius: '6px',
                    }
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    padding: 2,
                    color: 'white',
                    borderBottomLeftRadius: '15px',
                    borderBottomRightRadius: '15px',
                    '@media (max-width: 600px)': {
                        padding: 1.5,
                        borderBottomLeftRadius: '10px',
                        borderBottomRightRadius: '10px',
                    },
                    '@media (max-width: 425px)': {
                        padding: 1,
                        borderBottomLeftRadius: '8px',
                        borderBottomRightRadius: '8px',
                    },
                    '@media (max-width: 350px)': {
                        padding: 0.75,
                        borderBottomLeftRadius: '6px',
                        borderBottomRightRadius: '6px',
                    }
                }}
            >
                <Typography variant="h6" noWrap
                    sx={{
                        '@media (max-width: 600px)': {
                            fontSize: '0.9rem',
                        },
                        '@media (max-width: 425px)': {
                            fontSize: '0.8rem',
                        },
                        '@media (max-width: 350px)': {
                            fontSize: '0.7rem',
                        }
                    }}
                >
                    {movie.title}
                </Typography>
                {movie.year && (
                    <Typography variant="body2" sx={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        '@media (max-width: 600px)': {
                            fontSize: '0.75rem',
                        },
                        '@media (max-width: 425px)': {
                            fontSize: '0.7rem',
                        },
                        '@media (max-width: 350px)': {
                            fontSize: '0.65rem',
                        }
                    }}>
                        {movie.year}
                    </Typography>
                )}
            </Box>
        </Card>
    );
};

export default CardMovie;

