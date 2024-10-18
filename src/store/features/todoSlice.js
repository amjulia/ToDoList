import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [{ id: Date.now(), text: "Выпить кофе", completed: false }],
    filter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const selectFilteredTodos = (state) => {
  switch (state.todos.filter) {
    case "completed":
      return state.todos.todos.filter((todo) => todo.completed);
    case "not_completed":
      return state.todos.todos.filter((todo) => !todo.completed);
    default:
      return state.todos.todos;
  }
};
export const { addTodo, toggleTodo, removeTodo, editTodo, setFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
