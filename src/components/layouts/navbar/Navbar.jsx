import React, { useEffect, useState } from 'react';


// import Image from '../../images/Image';
import Button from '../../buttons/Button';

import styles from './navbar.module.css';
import Menu from './components/menu/menu';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [selectedLang, setSelectedLang] = useState('heb');
  const languages = ['heb', 'en'];

  const _showMenu = () => {
    setShowMenu(true);
    console.log(showMenu)
  }

  useEffect(() => {
      showMenu ? document.body.style.overflowY = 'hidden' :
      document.body.style.overflowY = 'scroll';
    
  }, [showMenu]);


return (
  <>
    <div className={styles.navbar}>
      <div className={styles.navbarMainContainer}>
        <img src={`${showMenu ? '../assets/headers/menu/menuIconTurquoise.svg' : '../assets/headers/menu/menuIcon.svg'}`} alt='menuIcon' className={styles.menuIcon} onClick={_showMenu} />
        <div className={styles.languagesContainer}>
          {languages.map((language) => (
            <Button
              key={language}
              title={language}
              className={`${selectedLang === language ? (showMenu ? styles.languageCircleCheckedBlack : styles.languageCircleCheckedWhite) : (showMenu ? styles.labguageColorUncheckedMenu : styles.languageColorUnchecked)} ${styles.languageContainer}`}
              onClick={() => setSelectedLang(language)}
            />
          ))}
        </div>
      </div>
      <Button title={'ונתיא ורבד'} className={styles.signInButton} />
    </div>
    {showMenu && <Menu onClick={() => setShowMenu(false)}/>}
  </>
) 
}

export default Navbar;