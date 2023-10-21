import { createSlice } from '@reduxjs/toolkit';
import { act } from '@testing-library/react';

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleCompletedTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload); //Находим тот todo по которому кликнули
      toggleTodo.completed = !toggleTodo.completed;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload); //перезаписываем массив todos без того элемента на который кликнули
    },
  },
});

export const { addTodo, toggleCompletedTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
