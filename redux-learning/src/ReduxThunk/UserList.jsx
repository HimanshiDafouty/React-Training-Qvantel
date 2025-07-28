import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserList } from './userListSlice';

const UserList = () => {
  const dispatch = useDispatch();

  const users = useSelector(state => state.userList.items);
  const status = useSelector(state => state.userList.status);
  const error = useSelector(state => state.userList.error);

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  return (
    <div>
      <h1>Redux Thunk</h1>

      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'fail' && <h2>Error: {error}</h2>}

      {status === 'success' && users.map(user => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  );
};

export default UserList;
