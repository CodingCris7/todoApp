import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleCompleted } from '../stores/todosSlice';

import TodoCard from './TodoCard';

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.list);

  const handleDeleteTodo = (id) => () => {
    dispatch(deleteTodo(id));
  };

  const handleToggleComplete = (id) => () => {
    dispatch(toggleCompleted(id));
  };

  return (
    <section className="mt-6">
      <h1 className="mb-2 text-2xl text-dark-gray">Tasks List</h1>
      <div className="flex">
        {todoList.map((item) => (
          <TodoCard
            key={item.id}
            todo={item}
            handleDelete={handleDeleteTodo(item.id)}
            handleComplete={handleToggleComplete(item.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default TodoList;
