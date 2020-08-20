import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getUsers, updateExercise } from "./../../actions/index";
import api from "./../../api";

export const EditExercise = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const {
    match: {
      params: { id },
    },
  } = props;

  const [exercise, setExercise] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
  });

  const { username, description, duration, date } = exercise;

  useEffect(() => {
    api
      .get("exercises/" + id)
      .then((response) => {
        setExercise({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date),
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (exercise.duration == 0) {
      alert("Duration must be higher than 0!");
    } else {
      const exercise_record = {
        username,
        description,
        duration,
        date,
      };

      dispatch(updateExercise(id, exercise_record));
      window.location = "/";
    }
  };

  // console.log("exercise:", exercise);

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Username: </label>
          <select
            required
            className='form-control'
            value={username}
            onChange={(e) =>
              setExercise({ ...exercise, username: e.target.value })
            }>
            {users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className='form-group'>
          <label>Description: </label>
          <input
            type='text'
            required
            className='form-control'
            value={description}
            onChange={(e) =>
              setExercise({ ...exercise, description: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <label>Duration (in minutes): </label>
          <input
            type='text'
            className='form-control'
            value={duration}
            onChange={(e) =>
              setExercise({ ...exercise, duration: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <label>Date: </label>
          <div>
            <DatePicker
              selected={date}
              onChange={(e) => setExercise({ ...exercise, date: e })}
            />
          </div>
        </div>

        <div className='form-group'>
          <input
            type='submit'
            value='Create Exercise Log'
            className='btn btn-primary'
          />
        </div>
      </form>
    </div>
  );
};
