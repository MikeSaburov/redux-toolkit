import React from 'react';
import { FirstName } from './FirstName';
import { LastName } from './LastName';
import { useDispatch } from 'react-redux';
import { setFirstName, setLastName } from '../../features/userSlice/userSlice';

export const ReduxStateChange = () => {
  const dispatch = useDispatch();

  return (
    <div className="blockOne">
      <h3>Redux Toolkit State Change</h3>
      <input
        type="text"
        placeholder="Имя..."
        onChange={(e) => {
          dispatch(setFirstName(e.target.value));
        }}
      />
      <input
        type="text"
        placeholder="Фамилия..."
        onChange={(e) => {
          dispatch(setLastName(e.target.value));
        }}
      />
      <div className="outputInfo">
        <FirstName />
        <LastName />
      </div>
    </div>
  );
};
