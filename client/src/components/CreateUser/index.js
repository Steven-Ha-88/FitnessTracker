import React, { useState } from "react";
import { addUser } from "./../../actions/index";
import { useDispatch } from "react-redux";

export const CreateUser = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username.charAt(0).toUpperCase() + username.slice(1),
    };
    dispatch(addUser(user));
    setUsername("");
    window.location = "/create";
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Username: </label>
          <input
            type='text'
            required
            className='form-control'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='submit'
            value='Create User'
            className='btn btn-primary'
          />
        </div>
      </form>
    </div>
  );
};
