import { useState, useEffect } from 'react';

const useMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const resizeHandler = () => {
            setIsMobile(window.innerWidth <= 414);
        };
        resizeHandler();
        window.addEventListener('resize', resizeHandler);
    }, []);
    
    return {isMobile};
}


export default useMobile;