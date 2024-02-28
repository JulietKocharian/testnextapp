import React from 'react'

import styles from './phenomena.module.css'

const PhenomenaGroup = () => {
  return (
    <div className={styles.phenomenaContainer}>
        <p className={styles.phenomenaText}>phenomena group</p>
        <div className={styles.linesContainer}>
            <div className={styles.line1}/>
            <div className={styles.line2}/>
        </div>
        <img src='../assets/headers/facebook.svg' alt='facebook'/>
    </div>
  )
}

export default PhenomenaGroup;