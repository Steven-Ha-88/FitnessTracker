import { FETCH_USERS, FETCH_USERS_ERROR, LOADING } from "./../actions/types";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        error: "",
        loading: false,
      };
    case FETCH_USERS_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
