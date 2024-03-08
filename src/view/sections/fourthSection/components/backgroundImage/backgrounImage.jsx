import React from 'react';

import styles from './backgroundImage.module.css';

const BackgrounImage = ({isMobile}) => {
  return (
    <img 
    alt='backgroundImage' 
    className={isMobile ? styles.backgroundImageMobile : styles.image}
    src={`${isMobile ? '../assets/sections/fourthSection/backgroundMobile.svg' : '../assets/sections/fourthSection/background.svg'}`}
    />
  )
}


export default BackgrounImage