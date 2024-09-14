import React, { useEffect } from 'react';
import {useWindowSize} from "../hooks/useWindowSize";

const getColor = (width) => {
    if (width >= 1000) {
        return 'lightblue';
    } else if (width >= 700 && width < 1000) {
        return 'lightgreen';
    } else {
        return 'lightcoral';
    }
};

export const WindowComponent = () => {
  const {width, height} = useWindowSize();

  useEffect(() => {
        if (document.body) {
            document.body.style.backgroundColor = getColor(width);
        }

     return () => {
         if (document.body) {
             document.body.style.backgroundColor = '';
         }
     };
  }, [width]);

  return (
      <div style={{padding: '20px'}}>
          <h2>Window Size Detector</h2>
          <p>Window width: {width}px</p>
          <p>Window height: {height}px</p>
          <p>Resize the window to see the background color change. The background will be:</p>
              <ul>
                  <li>Light coral for small screens (width less than 700px)</li>
                  <li>Light green for medium screens (width between 700px and 1000px)</li>
                  <li>Light blue for large screens (width bigger than 1000px)</li>
              </ul>
      </div>
  );
};
