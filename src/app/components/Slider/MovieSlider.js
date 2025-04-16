"use client";
import { useMemo } from "react";
import Image from "next/image";
import { Box, Card, CardMedia, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./MovieSlider.css";

// Move movie posters to a separate constant outside component
const MOVIE_POSTERS = [
  {
    url: "https://rukminim3.flixcart.com/image/850/1000/poster/q/r/v/posterskart-interstellar-movie-poster-pkis04-medium-original-imaebctvytcgcgcx.jpeg?q=90&crop=false",
    alt: "Interstellar Movie Poster",
  },
  {
    url: "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/GtEAAOSw1W9eN1cY/$_57.JPG?set_id=8800005007",
    alt: "Movie Poster 2",
  },
  {
    url: "https://support.musicgateway.com/wp-content/uploads/2021/05/movie-poster-examples-rogue-one-1-1.jpg",
    alt: "Rogue One Movie Poster",
  },
  {
    url: "https://entertainment.time.com/wp-content/uploads/sites/3/2013/08/oblivion-poster.jpg",
    alt: "Oblivion Movie Poster",
  },
];

export default function MovieSlider() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const swiperConfig = useMemo(
    () => ({
      spaceBetween: isMobile ? 0 : 0,
      slidesPerView: isMobile ? 1 : isTablet ? 2 : 3,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        disabledClass: "swiper-button-disabled",
      },
      pagination: {
        clickable: true,
        dynamicBullets: true,
        el: ".swiper-pagination",
        type: "bullets",
      },
      modules: [Autoplay, Navigation, Pagination],
    }),
    [isMobile, isTablet]
  );

  return (
    <Box
      className="main-div movies-main"
      sx={{
        mt: 0,
        pt: 0,
        position: "relative",
        width: "100vw",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        overflow: "hidden",
        backgroundColor: "transparent",
      }}
    >
      <Image
        src="/assets/images/banner.svg"
        alt="Background"
        fill
        priority
        quality={75}
        style={{
          objectFit: "cover",
          opacity: 0.6,
        }}
      />
      <Box className="slider-wrapper">
        <Box className="slider-container">
          <Swiper {...swiperConfig} className="movie-carousel">
            {MOVIE_POSTERS.map((poster, index) => (
              <SwiperSlide key={index} className="swiper-slide-custom">
                <Card
                  className="poster-card"
                  sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    "&:hover": {
                      boxShadow: "none",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={poster.url}
                    alt={poster.alt}
                    sx={{
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
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
      </Box>
    </Box>
  );
}
