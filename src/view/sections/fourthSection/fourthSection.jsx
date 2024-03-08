import React from 'react';

import BackgrounImage from './components/backgroundImage/backgrounImage';
import AnimatedImage from '../../../components/images/AnimatedImage';
import Title from './components/title/title';
import Text from './components/text/text';

import useMobile from '../../../hooks/useMobile';

import styles from './fourthSection.module.css';

const FourthSection = () => {

  const { isMobile } = useMobile();


  return (
    <section className={styles.mainContainer}>
      <div className={styles.titleTextContainer}>
        <Title />
        <Text />
      </div>
      <BackgrounImage isMobile={isMobile}/>
      <AnimatedImage
        isMobile={isMobile}
        section={'fourthSection'}
        imageStyle={styles.image}
        imageMobileStyle={styles.imageMobile}
        containerStyle={styles.imageContainer}
      />

    </section>
  )
}



export default FourthSection;