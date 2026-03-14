import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Features/Todo/TodoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;