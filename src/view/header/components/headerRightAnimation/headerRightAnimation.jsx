import React from 'react';

import useCursor from '../../../../hooks/useCursor';

import styles from './headerRightAnimation.module.css';

const HeaderRightAnimation = () => {
    const {position, _cursorMove, _cursorLeave} = useCursor();

    return (
        <>
        <img
        alt=''
        style={{
            transition: 'transform 0.2s linear',
            transform: `translate(${Math.sin(position.x / 50) * 10}px, ${Math.sin(position.y / 50) * 10}px)`
        }}
        onMouseMove={_cursorMove}
        onMouseLeave={_cursorLeave}
        className={styles.headerRightAnimationMobile} 
        src={'../assets/headers/animation/headerRightAnimationMobile.svg'}
        />
        <img
            alt='headerRightAnimation'
            onMouseMove={_cursorMove}
            onMouseLeave={_cursorLeave}
            className={styles.headerRightAnimation}
            src={'../assets/headers/animation/headerRightAnimation.svg'}
            style={{
                transition: 'transform 0.2s linear',
                transform: `translate(${Math.sin(position.x / 50) * 10}px, ${Math.sin(position.y / 50) * 10}px)`
            }}
             />
            </>
    )
}

export default HeaderRightAnimation;

