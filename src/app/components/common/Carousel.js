"use client";
import React, { useState, useMemo } from 'react';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { motion } from 'framer-motion';

const Carousel = ({ 
  items, 
  renderItem, 
  title, 
  subtitle,
  itemsPerPage = 4,
  showNavigation = true,
  className = "",
  containerClassName = "",
  titleClassName = "",
  navigationClassName = "",
  itemsClassName = "",
  itemClassName = "",
  initialAnimation = true,
  onItemClick
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  // Adjust items per page based on screen size
  const adjustedItemsPerPage = useMemo(() => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return itemsPerPage;
  }, [isMobile, isTablet, itemsPerPage]);
  
  // Memoized value for displayed items
  const displayedItems = useMemo(() => {
    return items.slice(currentIndex, currentIndex + adjustedItemsPerPage);
  }, [items, currentIndex, adjustedItemsPerPage]);
  
  // Handle navigation
  const handlePrevClick = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };
  
  const handleNextClick = () => {
    setCurrentIndex(prev => {
      const nextIndex = prev + 1;
      return nextIndex + adjustedItemsPerPage > items.length ? prev : nextIndex;
    });
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };
  
  // Edge case for empty items data
  if (items.length === 0) {
    return <Box className={className}>Loading...</Box>;
  }
  
  return (
    <motion.div 
      className={`carousel ${className}`}
      initial={initialAnimation ? "hidden" : "visible"}
      animate={isInView || !initialAnimation ? "visible" : "hidden"}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      viewport={{ margin: "-100px" }}
      variants={containerVariants}
    >
      <Box className={`carousel-container ${containerClassName}`}>
        {title && (
          <motion.div 
            className={`carousel-title ${titleClassName}`}
            variants={itemVariants}
          >
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </motion.div>
        )}
        
        {showNavigation && (
          <motion.div 
            className={`carousel-navigation ${navigationClassName}`}
            variants={itemVariants}
          >
            <IconButton
              className="carousel-prev-button"
              onClick={handlePrevClick}
              disabled={currentIndex <= 0}
              aria-label="Previous Item"
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeftIcon />
            </IconButton>
            <IconButton
              className="carousel-next-button"
              onClick={handleNextClick}
              disabled={currentIndex + adjustedItemsPerPage >= items.length}
              aria-label="Next Item"
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRightIcon />
            </IconButton>
          </motion.div>
        )}
      </Box>
      
      <Box className={`carousel-items ${itemsClassName}`}>
        <Box className="carousel-items-wrapper">
          {displayedItems.map((item, index) => (
            <motion.div 
              key={item.id || index}
              className={`carousel-item ${itemClassName}`}
              variants={itemVariants}
              onClick={() => onItemClick && onItemClick(item)}
              style={{ 
                cursor: onItemClick ? 'pointer' : 'default',
                position: 'relative'
              }}
            >
              {React.cloneElement(renderItem(item), {
                isCenter: index === Math.floor(displayedItems.length / 2)
              })}
            </motion.div>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};

export default Carousel; 