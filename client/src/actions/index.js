import {
  FETCH_EXERCISES,
  FETCH_EXERCISES_ERROR,
  FETCH_USERS,
  FETCH_USERS_ERROR,
  LOADING,
} from "./types";

import api from "./../api";

const fetchExercises = (data) => ({
  type: FETCH_EXERCISES,
  payload: data,
});

const fetchExercisesError = (err) => ({
  type: FETCH_EXERCISES_ERROR,
  payload: err,
});

const fetchUsers = (users) => ({
  type: FETCH_USERS,
  payload: users,
});

const loading = () => ({
  type: LOADING,
});

const fetchUsersError = (data) => ({
  type: FETCH_USERS_ERROR,
  payload: data,
});

//<---------Exercise actions----------->

export const getExercises = () => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await api.get("exercises/");
    console.log("Exercises:", response.data);
    dispatch(fetchExercises(response.data));
  } catch (e) {
    dispatch(fetchExercisesError("not found"));
  }
};

export const updateExercise = (id, exercise) => async (dispatch) => {
  try {
    const response = await api.post(`exercises/update/${id}`, exercise);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export const addExercise = (exercise) => async (dispatch) => {
  try {
    const response = await api.post(
      "http://localhost:5000/exercises/add",
      exercise
    );
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export const deleteExercise = (id) => async (dispatch) => {
  try {
    const response = await api.delete("exercises/" + id);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

//<---------User actions----------->

export const getUsers = () => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await api.get("users/");
    // console.log("Users:", response.data);
    const users = response.data.map((user) => user.username);

    dispatch(fetchUsers(users));
  } catch (e) {
    dispatch(fetchUsersError(e));
  }
};

export const addUser = (user) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await api.post("users/add", user);
    console.log("USER ADDED", response);
  } catch (e) {
    dispatch(fetchUsersError(e));
  }
};
