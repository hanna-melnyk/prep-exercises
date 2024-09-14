import {useState, useEffect, useDebugValue} from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
    setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
    })
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);

  }, [] );

  useDebugValue(`width: ${windowSize.width}px, height: ${windowSize.height}px`);

  return windowSize;
};