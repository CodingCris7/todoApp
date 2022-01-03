import React from 'react';
import { useSelector } from 'react-redux';

import { Add } from '@mui/icons-material';
import TodoCard from '../components/TodoCard';

const Home = () => {
  const getTodoList = useSelector((state) => state.todos.list);
  return (
    <div>
      <h1 className="flex">ToDo&apos;s List</h1>
      <Add />
      {getTodoList.length > 0 && <TodoCard />}
    </div>
  );
};

export default Home;
