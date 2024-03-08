import React from 'react'

import ArrowButton from '../../../../components/buttons/ArrowButton/ArrowButton';

import styles from './options.module.css';

const Options = () => {
  return (
    <div className={styles.options}>
    {['תימדתו גותימ', 'םיגולונכט תונורתפ', 'יקסע יוילו ץועיי'].map((text) => (
       <div className={styles.optionContainer} key={text}>
       <p className={styles.optionText}>{text}</p>
       <ArrowButton/>
     </div>
    ))}
    </div>
  )
}

export default Options;