"use client";
import dynamic from 'next/dynamic';
import styles from "./page.module.css";
import Footer from './components/Footer/Footer';

// Optimize dynamic imports with loading states
const MovieSlider = dynamic(() => import("./components/Slider/MovieSlider"), { 
  ssr: false,
  loading: () => <div className={styles.loading}>Loading Slider...</div>
});

const CardSlider = dynamic(() => import("./components/CardSlider/CardSlider"), { 
  ssr: false,
  loading: () => <div className={styles.loading}>Loading Cards...</div>
});

const MostWatched = dynamic(() => import("./components/MostWatched/MostWatched"), { 
  ssr: false,
  loading: () => <div className={styles.loading}>Loading Most Watched...</div>
});

const TrendingMovies = dynamic(() => import("./components/TrendingMovies/TrendingMovies"), { 
  ssr: false,
  loading: () => <div className={styles.loading}>Loading Trending Movies...</div>
});

const About = dynamic(() => import("./components/About/About"), { 
  ssr: false,
  loading: () => <div className={styles.loading}>Loading About...</div>
});

const FAQ = dynamic(() => import("./components/FAQ/Faq"), { 
  ssr: false,
  loading: () => <div className={styles.loading}>Loading FAQ...</div>
});

import Header from './components/Header/Header';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
     
        <MovieSlider />
        <CardSlider />
        <TrendingMovies />
        <MostWatched />
        <About />
        <FAQ />
       
      </main>
    </div>
  );
}
