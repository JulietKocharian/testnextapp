import React from 'react';

import Navbar from '../../components/layouts/navbar/Navbar'
import HeaderMain from './components/headerMain/headerMain';
import PhenomenaGroup from './components/phenomenaGroup/phenomenaGroup';
import PhoneButton from '../../components/buttons/PhoneButton/PhoneButton';
import HeaderRightAnimation from './components/headerRightAnimation/headerRightAnimation';


import useMobile from '../../hooks/useMobile';

import styles from './headerSection.module.css';

const HeaderSection = () => {

  const { isMobile } = useMobile();


  return (
    <div style={{ position: 'relative' }}>
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
        src={`${isMobile ?
          '../assets/headers/headerBackgroundMobile.svg'
          : '../assets/headers/headerBackground.svg'}`}
      />
      <HeaderRightAnimation />
      {/* <PhoneButton /> */}
    </div>
  )
}

export default HeaderSection;
