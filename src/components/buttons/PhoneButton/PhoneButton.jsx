import React from 'react';

import styles from './phoneButton.module.css';

const PhoneButton = () => {
  return (
    <div className={styles.phoneContainer}>
    <button className={styles.phoneButton}>
        <img src='../assets/headers/menu/phoneIcon.svg' alt='phoneButton'/>
    </button>
    </div>
  )
}

export default PhoneButton;
