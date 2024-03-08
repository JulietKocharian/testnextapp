import React, { useState } from 'react';

import styles from './animatedImage.module.css';
import useCursor from '../../../../../hooks/useCursor';

const AnimatedImage = ({ isMobile }) => {

    const {position, _cursorLeave, _cursorMove} = useCursor();

    return (
        <div className={styles.imageContainer}>
            <img
                alt='image1'
                className={isMobile ? styles.imageMobile : styles.image}
                onMouseMove={_cursorMove}
                onMouseLeave={_cursorLeave}
                src={`${isMobile ?
                    '../assets/sections/secondSection/rectangleMobile1.svg' :
                    '../assets/sections/secondSection/rectangle1.svg'}`}
                style={{
                    transition: 'transform 0.2s linear',
                    transform: `translate(${Math.sin(position.x / 50) * 10}px, ${Math.sin(position.y / 50) * 10}px)`
                }}
            />
            <img
                alt='image2'
                onMouseMove={_cursorMove}
                onMouseLeave={_cursorLeave}
                className={isMobile ? styles.imageMobile : styles.image}
                src={`${isMobile ?
                    '../assets/sections/secondSection/rectangleMobile2.svg' :
                    '../assets/sections/secondSection/rectangle2.svg'}`}
                style={{
                    transition: 'transform 0.2s linear',
                    transform: `translate(${Math.sin(position.x / 80) * 10}px, ${Math.sin(position.y / 70) * 10}px)`
                }}
            />
        </div>
    )
}


export default AnimatedImage;