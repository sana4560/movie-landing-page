"use client";
import Image from "next/image";
import { Box, Card, CardMedia, useMediaQuery, useTheme, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./MovieSlider.css";
import Header from "../Header/Header"; // Importing the Header component

const moviePosters = [
  "https://rukminim3.flixcart.com/image/850/1000/poster/q/r/v/posterskart-interstellar-movie-poster-pkis04-medium-original-imaebctvytcgcgcx.jpeg?q=90&crop=false",
  "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/GtEAAOSw1W9eN1cY/$_57.JPG?set_id=8800005007",
  "https://support.musicgateway.com/wp-content/uploads/2021/05/movie-poster-examples-rogue-one-1-1.jpg",
  "https://entertainment.time.com/wp-content/uploads/sites/3/2013/08/oblivion-poster.jpg",
];

export default function MovieSlider() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <div className="main-div">
   
      <Header />
      
      <div className="slider-wrapper">
        <Image
          src="/assets/images/banner.svg"
          alt="Background"
          fill
          style={{
            objectFit: 'cover',
            opacity: 0.6,
            zIndex: -1,
          }}
        />
        
        <Box className="slider-container">
          <Swiper
            spaceBetween={isMobile ? 0 : -70}
            slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
            centeredSlides={!isMobile}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              disabledClass: 'swiper-button-disabled'
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: '.swiper-pagination',
              type: 'bullets',
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="movie-carousel"
          >
            {moviePosters.map((poster, index) => (
              <SwiperSlide key={index} className="swiper-slide-custom">
                <Card className="poster-card">
                  <CardMedia
                    component="img"
                    image={poster}
                    alt={`Movie ${index + 1}`}
                    sx={{
                      objectFit: 'cover', // Ensures image covers the container
                      height: "100%",     // Make sure the image covers the full height
                      width: "100%",      // Make sure the image covers the full width
                      top: 0,
                      left: 0,
                    }}
                  />
                </Card>
              </SwiperSlide>
            ))}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
          </Swiper>
        </Box>
      </div>
    </div>
  );
}
