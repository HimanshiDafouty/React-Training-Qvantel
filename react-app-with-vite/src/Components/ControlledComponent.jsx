import React, { useState } from 'react';

const ControlledComponent = () => {
  const [name, setName] = useState("");

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Success`);
  };

  return (
    <div>
      <h2>Controlled Component</h2>
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <br />
        <input type="text" value={name} onChange={changeHandler} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledComponent;
