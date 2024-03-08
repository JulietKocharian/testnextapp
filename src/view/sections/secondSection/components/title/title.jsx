import React from 'react';

import styles from './title.module.css';

const Title = () => {
  return (
    <div className={styles.container}>
        <img src='../assets/sections/secondSection/titleLine.svg' alt='titleLine' className={styles.line}/>
        <p className={styles.title}>יקסע יווילו ץועיי</p>
    </div>
  )
}

export default Title;