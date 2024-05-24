// react redux toolkit을 사용한 방법
import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counter";
import todoReducer from "./reducers/todo";
import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import customMiddleware from "./middlewares/my-middleware";
import delayMiddleware from "./middlewares/delay-middleware";

const myMiddlewares = [
  // logger, 
  // customMiddleware,
  delayMiddleware
];

export const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware().concat(myMiddlewares);
    // console.log(middlewares);
    return middlewares;
  },
});
// console.log(store.getState());

export default store;
