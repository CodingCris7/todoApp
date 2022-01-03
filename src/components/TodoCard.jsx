import React from 'react';
import { Delete, Edit } from '@mui/icons-material';

const TodoCard = () => (
  <div>
    <h3>Todo title</h3>
    <p>Todo&apos;s description</p>
    <div>
      <Delete />
      <Edit />
    </div>
  </div>
);

export default TodoCard;
