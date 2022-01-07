import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo({ list }, { payload }) {
      list.push({ ...payload, id: list.length + 1 });
    },
    updateTodo({ list }, { payload }) {
      const { id, title, description } = payload;
      return {
        list: list.map((item) => (
          (+item.id === +id) ? { ...item, title, description } : item)),
      };
    },
    deleteTodo({ list }, { payload }) {
      const todoIndex = list.findIndex((item) => +item.id === +payload);
      list.splice(todoIndex, 1);
    },
    toggleCompleted({ list }, { payload }) {
      return {
        list: list.map((item) => (
          (+item.id === +payload) ? { ...item, isCompleted: !item.isCompleted } : item)),
      };
    },
  },
});

export const {
  addTodo,
  updateTodo,
  deleteTodo,
  toggleCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
