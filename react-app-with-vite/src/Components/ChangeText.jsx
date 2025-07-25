import React, { useEffect, useRef } from 'react';

const ChangeText = () => {
  const inputRef = useRef();
  const textRef = useRef();

  // Focus the input field on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Change the heading text color on button click
  const handleChangeColor = () => {
    textRef.current.style.color = 'red';
    inputRef.current.style.color = 'yellow'

  };

  return (
    <div>
      <h2 ref={textRef}>useRef Hook</h2>
      <input
        type="text"
        ref={inputRef}
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <br /><br />
      <button onClick={handleChangeColor}>Change Text Color</button>
    </div>
  );
};

export default ChangeText;
