import React, { useState } from 'react';


import Image from '../../images/Image';
import Button from '../../buttons/Button';

import styles from './navbar.module.css';


const Navbar = () => {

  const [selectedLang, setSelectedLang] = useState('heb');
  const languages = ['heb', 'en'];

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarMainContainer}>
        <Image src='../assets/headers/menuIcon.svg' alt='menuIcon' className={styles.menuIcon} />
        <div className={styles.languagesContainer}>
          {languages.map((language) => (
            <Button
            key={language}
            title={language}
            className={`${selectedLang === language ? styles.languageCircleChecked : styles.languageCircle} ${styles.languageContainer}`}
            onClick={() => setSelectedLang(language)}
            />
            ))}
        </div>
      </div>
      <Button title={'ונתיא ורבד'} className={styles.signInButton} />
    </div>
  )
}

export default Navbar;