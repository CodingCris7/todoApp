import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      state.list.push({ ...payload, id: state.list.length + 1 });
    },
    deleteTodo(state, { payload }) {
      const todoIndex = state.list.findIndex((item) => +item.id === +payload);
      state.list.splice(todoIndex, 1);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
