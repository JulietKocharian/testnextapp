import React from 'react';

import styles from './scrollVertical.module.css';

const ScrollVertical = () => {
  return (
    <div className={styles.container}>
        <button className={styles.arrowButton}>
            <img src='../assets/sections/firstSection/downArrow.svg' alt='downArrow'/>
        </button>
        <p className={styles.text}>scroll</p>
        <div className={styles.line1}/>
        <p className={styles.text}>phenomena group</p>
        <div className={styles.line2}/>
    </div>
  )
}


export default ScrollVertical;