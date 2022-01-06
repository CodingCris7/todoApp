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
    deleteTodo(state, { payload }) {
      const todoIndex = state.list.findIndex((item) => +item.id === +payload);
      state.list.splice(todoIndex, 1);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
