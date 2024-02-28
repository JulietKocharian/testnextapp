import React from 'react'

import styles from './headerLeftAnimation.module.css';

const HeaderLeftAnimation = () => {
  return (
    <div className={styles.headerLeftAnimationContainer}>
    <img
      alt=''
      className={styles.headerLeftAnimation1}
      src={'../assets/headers/animation/headerLeftAnimation1.svg'}
    />
    <img
      alt=''
      className={styles.headerLeftAnimation2}
      src={'../assets/headers/animation/headerLeftAnimation2.svg'}
    />
  </div>
  )
}

export default HeaderLeftAnimation;