import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Add } from '@mui/icons-material';
import TodoCard from '../components/TodoCard';

const Home = () => {
  const todoList = useSelector((state) => state.todos.list);

  return (
    <div>
      <h1 className="flex">ToDo&apos;s List</h1>
      <Link to="/add">
        <Add />
      </Link>
      {todoList.length > 0 && (
        todoList.map((item) => <TodoCard key={item.id} todo={item} />)
      )}
    </div>
  );
};

export default Home;
