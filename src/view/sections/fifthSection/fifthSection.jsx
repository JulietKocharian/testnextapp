import React from 'react';

import Carousel from './components/carousel/carousel';
import Title from '../shared/title/title';

import styles from './fifthSection.module.css';

const FifthSection = () => {
    return (
        <section className={styles.mainContainer}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Title title={'םירחבנ םיטקייורפ'} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Carousel />
            </div>
        </section>
    )
}


export default FifthSection;