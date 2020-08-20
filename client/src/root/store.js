import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

export const middlewares = [thunk];

middlewares.push(createLogger());
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
