import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import usePath from '../hooks/usePath';
import { getTodoById } from '../lib/helpers';
import { addTodo, updateTodo } from '../stores/todosSlice';

const TodoForm = () => {
  const [todo, setTodo] = useState({
    title: '',
    description: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const path = usePath();
  const todoList = useSelector((state) => state.todos.list);

  useEffect(() => {
    if (path === 'edit') {
      const { title, description } = getTodoById(todoList, id);
      setTodo({
        title,
        description,
      });
    }
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (path === 'edit') {
      dispatch(updateTodo({ ...todo, id }));
    } else {
      dispatch(addTodo(todo));
    }
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
