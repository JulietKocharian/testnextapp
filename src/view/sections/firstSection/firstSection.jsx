import React from 'react';


import Text from './components/text/text';
import Title from '../shared/title/title';
import Numbers from './components/numbers/numbers';
import ScrollVertical from './components/scrollVertical/scrollVertical';

import styles from './firstSection.module.css';


const FirstSection = () =>  {
  return (
    <section className={styles.container}>
      <ScrollVertical/>
        <Title title={'הרוק הז ךיא'}/>
        <div className={styles.numbersTextContainer}>
        <Numbers/>
        <Text/>
        </div>
        <Title title={'םישוע ונחנא המ'}/>
    </section>
  )
}


export default FirstSection;