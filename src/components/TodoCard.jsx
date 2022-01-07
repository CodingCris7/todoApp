import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Delete,
  Edit,
  CheckCircleOutline,
  RadioButtonUnchecked,
} from '@mui/icons-material';

const TodoCard = ({ todo, handleDelete, handleComplete }) => {
  const {
    id,
    title,
    description,
    isCompleted,
  } = todo;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <Delete onClick={handleDelete} />
        <Link to={`/edit/${id}`}>
          <Edit />
        </Link>
      </div>
      <div>
        {!isCompleted ? (
          <RadioButtonUnchecked onClick={handleComplete} />
        ) : (
          <CheckCircleOutline onClick={handleComplete} />
        )}
      </div>
    </div>
  );
};

TodoCard.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }),
  handleDelete: PropTypes.func.isRequired,
  handleComplete: PropTypes.func.isRequired,
};

TodoCard.defaultProps = {
  todo: {
    id: 0,
    title: 'Default Todo',
    description: 'Default todo item',
    isCompleted: false,
  },
};

export default TodoCard;
