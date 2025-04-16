"use client";
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import MovieSection from "../common/MovieSection";
import CardMovie from "../Card/CardMovie";

const CardSlider = () => {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    fetch("/Apis/movies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setMovies(data);
        } else {
          console.error("Invalid data format");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const moviesPerPage = 6;
  const displayedMovies = useMemo(() => {
    return movies.slice(count, count + moviesPerPage);
  }, [movies, count]);

  const handlePrevClick = () => {
    setCount((prev) => Math.max(0, prev - moviesPerPage));
  };

  const handleNextClick = () => {
    if (count + moviesPerPage < movies.length) {
      setCount((prev) => prev + moviesPerPage);
    }
  };

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <MovieSection
      title="Film Ghar Collection"
      onPrevClick={handlePrevClick}
      onNextClick={handleNextClick}
      canPrev={count > 0}
      canNext={count + moviesPerPage < movies.length}
      sx={{
        borderRadius: "8px",
        marginTop: "-7rem",
        marginBottom: "0",
        // padding: '0.125rem 0',
        width: "100%",
        maxWidth: "100%",
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

export default CardSlider;
