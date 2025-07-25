import React, { useEffect, useState } from 'react';

const HookUseEffect = () => {
  const [count, setCount] = useState(0);

  // Runs only once on mount(empty dependency array)
//   useEffect(() => {
//     setTimeout(() => {
//       setCount(count + 1);
//     }, 3000);
//   }, []);

  // Runs every time count changes(with dependency)(infinite loop if not stopped)
//   useEffect(() => {
//     setTimeout(() => {
//       setCount(count + 1);
//     }, 3000);
//   }, [count]);

  // Runs on every render(without dependecy array)
//   useEffect(() => {
//     setTimeout(() => {
//       setCount(count + 1);
//     }, 3000);
//   });

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default HookUseEffect;
