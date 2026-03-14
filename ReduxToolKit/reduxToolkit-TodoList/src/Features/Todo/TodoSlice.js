import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({//These curly braces {} create a JavaScript object. We are pushing an object into the array.      
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todo.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todo.find((item) => item.id === id);
      if (todo) {
        todo.text = text;
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
