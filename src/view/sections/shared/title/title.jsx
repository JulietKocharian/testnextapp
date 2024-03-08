import React from 'react'

import styles from './title.module.css';

const Title = ({title, customStyle}) => {
  return (
    <div className={`${styles.titleContainer} ${customStyle}`}>
        <p className={styles.title}>{title}</p>
        <img src='../assets/sections/firstSection/titleLine.svg' alt='titleLine' className={styles.line}/>
    </div>
  )
}

export default Title;

