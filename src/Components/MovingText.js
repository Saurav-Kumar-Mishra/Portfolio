import React, { useState, useEffect } from 'react';

const MovingText = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const addAndRemoveText = () => {
      const textToDisplay = ' A web developer';

      let currentIndex = 0;
      let direction = 1; // 1 for adding, -1 for removing

      const updateText = () => {
        setText(textToDisplay.slice(0, currentIndex));

        if (direction === 1) {
          currentIndex++;
          if (currentIndex > textToDisplay.length) {
            direction = -1;
            setTimeout(updateText, 1000); // Delay before removing
          } else {
            setTimeout(updateText, 100); // Speed of adding
          }
        } else {
          currentIndex--;
          if (currentIndex < 0) {
            direction = 1;
            setTimeout(addAndRemoveText, 1000); // Delay before adding again
          } else {
            setTimeout(updateText, 100); // Speed of removing
          }
        }
      };

      updateText();
    };

    addAndRemoveText();

  }, []);

  return <div className="text-xl lg:text-3xl font-bold text-center">{text}</div>;
};

export default MovingText;
