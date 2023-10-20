import React from 'react';
import { useSelector } from 'react-redux';

export const LastName = () => {
  const name = useSelector((state) => state.user.lastName);
  return (
    <div className="laststName">
      <h4>Фамилия: {name}</h4>
    </div>
  );
};
