import React from 'react'

import styles from './title.module.css';

const  Title = () =>{
  return (
    <div className={styles.lettersContainer}>
    {['P', 'H', 'E', 'N', 'O', 'M', 'E', 'N', 'A'].map((letter, index) => (
      <span className={`${styles.letterStyle} ${index && styles.zI1}`} key={index}>{letter}</span>
      ))}
    </div>
  )
}


export default Title;