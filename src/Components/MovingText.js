import React, { useState, useEffect } from 'react';

const MovingText = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const addAndRemoveText = () => {
      const textToDisplay = '  Full Stack Developer';

      let currentIndex = 0;
      let direction = 1; // 1 for adding, -1 for removing

      const updateText = () => {
        setText(textToDisplay.slice(0, currentIndex));

        if (direction === 1) {
          currentIndex++;
          if (currentIndex > textToDisplay.length) {
            direction = -1;
            setTimeout(updateText, 2000); // Delay before removing
          } else {
            setTimeout(updateText, 200); // Speed of adding
          }
        } else {
          currentIndex--;
          if (currentIndex < 0) {
            direction = 1;
            setTimeout(addAndRemoveText, 2000); // Delay before adding again
          } else {
            setTimeout(updateText, 200); 
          }
        }
      };

      updateText();
    };

    addAndRemoveText();

  }, []);

  return <div className="text-3xl lg:text-5xl font-bold   ">{text}</div>;
};

export default MovingText;
