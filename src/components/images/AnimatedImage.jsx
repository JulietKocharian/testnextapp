import React from 'react';
import useCursor from '../../hooks/useCursor';



const AnimatedImage = ({isMobile, imageStyle, imageMobileStyle, containerStyle, section}) => {

  const {position, _cursorLeave, _cursorMove} = useCursor();

  return (
    <div className={containerStyle}>
           <img
                alt='animatedImage'
                onMouseMove={_cursorMove}
                onMouseLeave={_cursorLeave}
                className={isMobile ? imageMobileStyle : imageStyle}
                src={isMobile ? `../assets/sections/${section}/animatedImageMobile.svg` : `../assets/sections/${section}/animatedImage.svg`}
                style={{
                    transition: 'transform 0.2s linear',
                    transform: `translate(${Math.sin(position.x / 80) * 10}px, ${Math.sin(position.y / 70) * 10}px)`
                }}
            />
    </div>
  )
}


export default AnimatedImage;