import React from 'react';
import { Link } from 'react-router-dom';

import { Add } from '@mui/icons-material';
import TodoList from '../components/TodoList';

const Home = () => (
  <div>
    <h1 className="flex">ToDo&apos;s List</h1>
    <Link to="/add-todo">
      <Add />
    </Link>
    <TodoList />
  </div>
);

export default Home;
