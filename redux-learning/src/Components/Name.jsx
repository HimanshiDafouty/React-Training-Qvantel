import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../ReduxJsToolkit/NameSlice';

const Name = () => {
  const nameMessage = useSelector((state) => state.name.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{nameMessage}</h2>
      <button onClick={() => dispatch(login())}>Login</button>
    </div>
  );
};

export default Name;
