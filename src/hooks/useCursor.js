import  { useState } from 'react';

const useCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const _cursorMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        document.body.style.overflowX = 'hidden';
    };

    const _cursorLeave = () => {
        setPosition({ x: 0, y: 0 });
        document.body.style.overflowX = 'hidden';
    };

    return {
        position,
        _cursorMove,
        _cursorLeave,
    };
}

export default useCursor;