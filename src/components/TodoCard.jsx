import React from 'react';
import PropTypes from 'prop-types';

import { Delete, Edit } from '@mui/icons-material';

const TodoCard = ({ todo }) => (
  <div>
    <h3>{todo.title}</h3>
    <p>{todo.description}</p>
    <div>
      <Delete />
      <Edit />
    </div>
  </div>
);

TodoCard.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

TodoCard.defaultProps = {
  todo: {
    id: 0,
    title: 'Default Todo',
    description: 'Default todo item',
  },
};

export default TodoCard;
