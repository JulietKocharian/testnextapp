import React from 'react'

import styles from './phenomena.module.css'

const PhenomenaGroup = ({textStyle, lineStyle, forMenu, containerStyle}) => {
  return (
    <div className={`${styles.phenomenaContainer} ${containerStyle}`}>
        <p className={`${styles.phenomenaText} ${textStyle}`}>phenomena group</p>
        <div className={styles.linesContainer}>
            <div className={`${styles.line1} ${lineStyle}`}/>
            <div className={styles.line2}/>
        </div>
        <img src={`${ forMenu ? '../assets/headers/facebookBlack.svg' : '../assets/headers/facebookWhite.svg'}`} alt='facebook'/>
    </div>
  )
}

export default PhenomenaGroup;