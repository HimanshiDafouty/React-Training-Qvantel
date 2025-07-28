import React from 'react';
import useFetch from '../CustomHooks/useFetch';

const UseFetchCustomHook = () => {
  const data = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      <h2>Users Data, with userId = 1:</h2>
      {data
        .filter((item) => item.userId === 1) 
        .map((item) => {
          return (
            <p>
              {`userId = ${item.userId}, title = ${item.title}`}
            </p>
          );
        })}
    </div>
  );
};

export default UseFetchCustomHook;
