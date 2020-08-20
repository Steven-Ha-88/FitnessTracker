import { combineReducers } from "redux";
import exercises from "../reducers/exercises";
import users from "../reducers/users";

export default combineReducers({
  exercises,
  users,
});
