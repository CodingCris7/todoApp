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
  },
});

export const { addTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
