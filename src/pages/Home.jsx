import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import TodoList from '../components/TodoList';

const Home = () => {
  const todosList = useSelector((state) => state.todos.list);

  return (
    <div className="max-w-screen-sm m-auto">
      <Header />
      {(todosList.length > 0) && <TodoList />}
    </div>
  );
};

export default Home;
