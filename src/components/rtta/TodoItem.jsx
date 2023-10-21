import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompletedTodo } from '../../features/todo/todoSlice';

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const toggleTodoHandler = (id) => {
    dispatch(toggleCompletedTodo(id));
  };

  return (
    <div className="todoItem">
      <div className="complite" onClick={() => toggleTodoHandler(todo.id)}>
        Выполнено
      </div>
      <div className={`item ${todo.completed ? 'item_completed' : ''}`}>
        {todo.text}
      </div>
      <div className="delete">Delete</div>
    </div>
  );
};
