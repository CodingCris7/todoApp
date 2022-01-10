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
    <div className={`w-1/3 pt-4 pr-4 pb-8 pl-4 mx-2.5 shadow-xl relative rounded cursor-pointer
                    bg-gradient-to-r from-indigo-dye via-space-cadet to-english-violet
                    group hover:scale-110 ${isCompleted ? 'completed' : ''}`}
    >
      <h3 className="mt-2.5 text-lg text-white">{title}</h3>
      <p className="mt-2.5 mb-2.5 text-sm text-white break-words">{description}</p>
      <div className="absolute bottom-3 right-3 text-right opacity-0 group-hover:opacity-100">
        <Delete className="text-white cursor-pointer" onClick={handleDelete} />
        <Link className="text-white cursor-pointer" to={`/edit/${id}`}>
          <Edit />
        </Link>
      </div>
      <div
        role="presentation"
        className="absolute top-3 right-3"
        onClick={handleComplete}
      >
        {!isCompleted ? (
          <RadioButtonUnchecked className="text-white cursor-pointer" />
        ) : (
          <CheckCircleOutline className="text-white cursor-pointer" />
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
