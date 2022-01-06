import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../stores/todosSlice';

import TodoCard from './TodoCard';

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.list);

  const handleDeleteTodo = (id) => () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="flex">
      {todoList.length > 0 && (
        todoList.map((item) => (
          <TodoCard key={item.id} todo={item} handleDelete={handleDeleteTodo(item.id)} />
        ))
      )}
    </div>
  );
};

export default TodoList;
