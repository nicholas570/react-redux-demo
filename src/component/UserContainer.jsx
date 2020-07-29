import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux';

function UserContainer() {
  const users = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return users.loading ? (
    <h2>loading...</h2>
  ) : users.err ? (
    <h2>{users.err}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {users.map((user) => (
          <div>
            <p key={user.id}>{user.name}</p>
            <p>
              City: <i>{user.address.city}</i>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserContainer;
