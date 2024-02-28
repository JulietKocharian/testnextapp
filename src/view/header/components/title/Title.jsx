import React from 'react'

import styles from './title.module.css';

const  Title = () =>{
  return (
    <div className={styles.lettersContainer}>
    {['P', 'H', 'E', 'N', 'O', 'M', 'E', 'N', 'A'].map((letter, index) => (
      <p className={`${styles.letterStyle} ${index && styles.zI1}`} key={index}>{letter}</p>
      ))}
    </div>
  )
}


export default Title;