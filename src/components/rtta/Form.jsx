import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todo/todoSlice';
import { v4 } from 'uuid';

export const Form = () => {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState('');

  const addTodoHandler = () => {
    const todo = {
      id: v4(),
      text: todoValue,
      completed: false,
    };

    dispatch(addTodo(todo));
    setTodoValue('');
  };
  return (
    <div>
      <h3>Redux Toolkit Todo App</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={todoValue}
          placeholder="Введите что нибудь...."
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button type="submit" onClick={() => addTodoHandler()}>
          Отправить
        </button>
      </form>
    </div>
  );
};
