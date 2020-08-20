import {
  FETCH_EXERCISES,
  FETCH_EXERCISES_ERROR,
  LOADING,
} from "./../actions/types";

const initialState = {
  exercises: [],
  loading: false,
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case FETCH_EXERCISES:
      return {
        ...state,
        exercises: action.payload,
        error: "",
        loading: false,
      };
    case FETCH_EXERCISES_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
