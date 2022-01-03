import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      state.list.push(payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
