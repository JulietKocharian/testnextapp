import React from 'react';

import styles from './button.module.css';


const ArrowButton = () =>  {
  return (
    <button className={styles.arrowButton}>
        <img src='../assets/headers/right-arrow.svg' alt='rightArrow'/>
    </button>
  )
}


export default ArrowButton;
