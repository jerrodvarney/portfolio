import React, { useRef, useEffect } from 'react';
import '../styles/flashlighteffect.scss';

export default function FlashlightEffect() {
  const cursorRef = useRef(null);

  const updateCursorPosition = (e) => {
    const cursor = cursorRef.current;

    if (cursor) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="cursor" ref={cursorRef} />
  );
}
