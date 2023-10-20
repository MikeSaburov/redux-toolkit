import React from 'react';
import { useSelector } from 'react-redux';

export const FirstName = () => {
  const name = useSelector((state) => state.user.firstName);
  return (
    <div className="firstName">
      <h4>Имя: {name}</h4>
    </div>
  );
};
