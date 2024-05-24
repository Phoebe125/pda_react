// react redux toolkit을 사용한 방법
import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counter";
import todoReducer from "./reducers/todo";
import { configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
const store = configureStore({ reducer: rootReducer });
// console.log(store.getState());

export default store;
