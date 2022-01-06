import React from 'react';
import { Link } from 'react-router-dom';

import { ArrowBack } from '@mui/icons-material';
import TodoForm from '../components/TodoForm';
import usePath from '../hooks/usePath';

const Todo = () => {
  const path = usePath();

  return (
    <div>
      <div>
        <Link to="/">
          <ArrowBack />
        </Link>
        <h1>{path}</h1>
      </div>
      <TodoForm />
    </div>
  );
};

export default Todo;
