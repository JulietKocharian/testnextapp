import React from 'react'

import PhenomenaGroup from '../../../../../view/header/components/phenomenaGroup/phenomenaGroup';

import useCursor from '../../../../../hooks/useCursor';

import styles from './menu.module.css';


const Menu = ({
    onClick
}) => {

    const { position, _cursorLeave, _cursorMove } = useCursor();

    const texts = ['יקסע יוילו ץועיי', 'תימדתו גותימ', 'םיגולונכט תונורתפ', 'ונלש ןויסנה'];

    return (
        <div className={styles.menuContainer}>
            <div className={styles.menu}>
                <div className={styles.menuIconTextsContainer}>
                    <div className={styles.closeIconContainer}>
                        <img src='../assets/headers/menu/closeIcon.svg' alt='closeIcon' className={styles.closeIcon} onClick={onClick} />
                    </div>
                    <div className={styles.menuTextsContainer}>
                        {texts.map((text, idx) => (
                            <p key={idx} className={styles.menuTexts}>{text}</p>
                        ))}
                    </div>
                </div>
                <div className={styles.phenomenaGroup}>
                    <PhenomenaGroup forMenu textStyle={styles.phenomenaTextColor} lineStyle={styles.lineStyle}
                        containerStyle={styles.phenomenaContainer}
                    />
                </div>
            </div>
            <div>
                <img
                    alt='menuAnimation'
                    onMouseMove={_cursorMove}
                    onMouseLeave={_cursorLeave}
                    className={styles.menuAnimatedImage}
                    src='../assets/headers/menu/menuAnimatedImage.svg'
                    style={{
                        transition: 'transform 0.2s linear',
                        transform: `translate(${Math.sin(position.x / 50) * 10}px, ${Math.sin(position.y / 50) * 10}px)`
                    }}
                />
            </div>
        </div>
    )
}


export default Menu;