import React from 'react';

const ChildArmstrong = (props) => {
  const check = () => {
    const num = props.number;
    let temp = num;
    let sum = 0;

    while (temp > 0) {
      let rem = temp % 10;
      sum += rem * rem * rem;
      temp = Math.floor(temp / 10);
    }

    const result = sum === num ? " Armstrong number" : "NOT an Armstrong number";

  
    props.sendData(result);
  };

  return (
    <div>
      <h1>ChildComponent</h1>
      <button onClick={check}>Click to check whether Armstrong or not</button>
    </div>
  );
};

export default ChildArmstrong;
