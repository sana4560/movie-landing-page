"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MovieSection from '../common/MovieSection';
import CardMovie from '../Card/CardMovie';

const MostWatched = () => {
    const [movies, setMovies] = useState([]);
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        fetch('/Apis/mostWatched.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const moviesPerPage = 6;
    const displayedMovies = movies.slice(count, count + moviesPerPage);

    const handlePrevClick = () => {
        setCount(Math.max(0, count - moviesPerPage));
    };

    const handleNextClick = () => {
        if (count + moviesPerPage < movies.length) {
            setCount(count + moviesPerPage);
        }
    };

    return (
        <MovieSection
            title="Most Watched Films"
            onPrevClick={handlePrevClick}
            onNextClick={handleNextClick}
            canPrev={count > 0}
            canNext={count + moviesPerPage < movies.length}
            sx={{
                backgroundColor: 'transparent',
              
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
             
                borderRadius: '8px',
                marginTop: '0rem',
                marginBottom: '0rem',
                padding: '1rem 0',
                width: '100%',
                maxWidth: '100%'
            }}
        >
            {displayedMovies.map((movie) => (
                <motion.div
                    key={movie.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <CardMovie movie={movie} />
                </motion.div>
            ))}
        </MovieSection>
    );
};

export default MostWatched;