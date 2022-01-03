import React from 'react';
import { Link } from 'react-router-dom';

import { ArrowBack } from '@mui/icons-material';
import TodoForm from '../components/TodoForm';

const AddTodo = () => (
  <div>
    <div>
      <Link to="/">
        <ArrowBack />
      </Link>
      <h1>Add</h1>
    </div>
    <TodoForm />
  </div>
);

export default AddTodo;
