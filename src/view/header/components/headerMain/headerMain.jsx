import React from 'react'

import HeaderLeftAnimation from '../headerLeftAnimation/headerLeftAnimation';
import Title from '../title/Title';
import Subtitle from '../subtitle/Subtitle';
import Options from '../options/Options';

import styles from './headerMain.module.css';

const HeaderMain = () => {
  return (
    <div>
      <HeaderLeftAnimation/>
          <div className={styles.headerOverview}>
            <div className={styles.titleSubtitleOptionsConatiner} >
              <div className={styles.titleSubtitleOptions}>
                <div className={styles.titleSubtitle}>
                  <Title />
                  <Subtitle />
                </div>
                <Options />
              </div>
            </div>
        </div>
    </div>
  )
}


export default HeaderMain;