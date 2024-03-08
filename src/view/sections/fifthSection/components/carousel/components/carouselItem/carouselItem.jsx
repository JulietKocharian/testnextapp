import React from 'react';

import styles from './carouselItem.module.css';

const CarouselItem = ({src}) => {
  return (
    <div className={styles.container}>
        <img alt='carouselImage' src={src} className={styles.image}/>
    </div>
  )
}


export default CarouselItem;