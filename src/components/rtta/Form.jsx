import React from 'react';

export const Form = () => {
  return (
    <div>
      <h3>Redux Toolkit Todo App</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Введите что нибудь...." />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};
