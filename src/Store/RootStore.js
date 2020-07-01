import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./RootReducer";

const configureStore = (initialState = {}) => {
  return createStore(reducer, initialState, applyMiddleware(thunk));
};

export const store = configureStore();
