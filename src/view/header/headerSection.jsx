import React from 'react';

import Navbar from '../../components/layouts/navbar/Navbar';
import HeaderMain from './components/headerMain/headerMain';
import PhenomenaGroup from './components/phenomenaGroup/phenomenaGroup';
import HeaderRightAnimation from './components/headerRightAnimation/headerRightAnimation';


import styles from './headerSection.module.css';

const HeaderSection = () => {

  return (
    <>
      <div className={styles.headerMainContainer}>
        <Navbar />
        <HeaderMain />
        <PhenomenaGroup />
      </div>
      <img
        alt={'headerWave'}
        className={styles.headerWave}
        src={'../assets/headers/header.svg'} />
        <img
        alt={'headerBackground'}
        className={styles.headerBackground}
        src={'../assets/headers/headerBackground.svg'} />
        <HeaderRightAnimation/>
    </>
  )
}

export default HeaderSection;
