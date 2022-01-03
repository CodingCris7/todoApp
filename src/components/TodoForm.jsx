import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTodo } from '../stores/todosSlice';

const TodoForm = () => {
  const [todo, setTodo] = useState({
    title: '',
    description: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;

    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    navigate('/');
  };

  return (
    <div>
      <form>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            id="title"
            value={todo.title}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="description">
          Description:
          <textarea
            name="description"
            id="description"
            value={todo.description}
            onChange={handleInput}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
};

export default TodoForm;
