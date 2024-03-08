import React from 'react';


import Text from './components/text/text';
import Title from './components/title/title';
import AnimatedImage from './components/animatedImage/animatedImage';

import styles from './secondSection.module.css';
import useMobile from '../../../hooks/useMobile';


const SecondSection = () => {
 const {isMobile} = useMobile();

  return (
    <section className={styles.mainContainer}>
      <div className={styles.titleTextContainer}>
        <Title />
        <Text />
      </div>
      <AnimatedImage isMobile={isMobile} />
      {isMobile &&
        <img
          alt='mobileBackground'
          className={styles.backgroundImageMobile}
          src='../assets/sections/secondSection/backgroundMobile.svg'
        />}
    </section>
  )
}


export default SecondSection;