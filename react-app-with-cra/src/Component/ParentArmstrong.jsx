import React from 'react';
import ChildArmstrong from './ChildArmstrong';

const ParentArmstrong = () => {
  const handleClick = (data) => {
    document.getElementById('demo').innerHTML = data;
  };

  return (
    <div>
      <h1>ParentArmstrong</h1>
      <h2 id='demo'></h2>
      <ChildArmstrong number={153} sendData={handleClick} />
    </div>
  );
};

export default ParentArmstrong;
