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
    isCompleted: false,
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
    <div className="w-1/2 mx-auto mt-3">
      <form className="flex flex-col">
        <label htmlFor="title" className="flex flex-col mb-4 text-dark-gray">
          Title:
          <input
            type="text"
            name="title"
            id="title"
            value={todo.title}
            onChange={handleInput}
            className="rounded border border-space-cadet"
          />
        </label>
        <label htmlFor="description" className="flex flex-col mb-4 text-dark-gray">
          Description:
          <textarea
            name="description"
            id="description"
            value={todo.description}
            onChange={handleInput}
            maxLength="70"
            className="rounded border border-space-cadet"
          />
        </label>
        <button
          type="submit"
          id="btn-submit"
          onClick={handleSubmit}
          className="w-1/2 mx-auto mt-4 p-2 rounded text-white bg-prussian-blue disabled:bg-gray-300"
          disabled={!todo.title}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
