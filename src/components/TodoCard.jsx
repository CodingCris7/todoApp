import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Delete, Edit } from '@mui/icons-material';

const TodoCard = ({ todo, handleDelete }) => (
  <div>
    <h3>{todo.title}</h3>
    <p>{todo.description}</p>
    <div>
      <Delete onClick={handleDelete} />
      <Link to={`/edit/${todo.id}`}>
        <Edit />
      </Link>
    </div>
  </div>
);

TodoCard.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  handleDelete: PropTypes.func.isRequired,
};

TodoCard.defaultProps = {
  todo: {
    id: 0,
    title: 'Default Todo',
    description: 'Default todo item',
  },
};

export default TodoCard;
