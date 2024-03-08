import React from 'react';

import styles from './title.module.css';


const Title = () => {
  return (
    <div className={styles.container}>
        <img src='../assets/sections/fourthSection/titleLine.svg' alt='animatedImage' className={styles.line}/>
        <p className={styles.title}>םימדקתמ םייגולונכט תונורתפ</p>
    </div>
  )
}


export default Title;