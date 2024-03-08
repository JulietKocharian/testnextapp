import React, { useState } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import CarouselItem from './components/carouselItem/carouselItem';
import { carouselSettings } from './components/carouselSettings';
import { CAROUSELINFOS } from './components/constants';

import styles from './carousel.module.css';

const Carousel = () => {

  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

  return (
    <div>
      <Slider {...carouselSettings}
        beforeChange={(currentSlide, nextSlide) => setCurrentSlideNumber(nextSlide)}
      >
        {CAROUSELINFOS.map((item, index) => (
          <div key={index}>
            <CarouselItem src={item.src} />
          </div>
        ))}
      </Slider>
      <div className={styles.slidesNumbers}>
        <span className={styles.currentSlide}>{currentSlideNumber + 1}</span>
        <span className={styles.slash}>/</span>
        <span className={styles.slideCount}>{CAROUSELINFOS.length}</span>
      </div>
      
    </div>
  )
}


export default Carousel;
