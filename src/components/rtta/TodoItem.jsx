import React from 'react';

export const TodoItem = ({ todo }) => {
  return (
    <div className="todoItem">
      <div className="complite">Complite</div>
      <div className="item">{todo.text}</div>
      <div className="delete">Delete</div>
    </div>
  );
};
