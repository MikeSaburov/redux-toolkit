import React from 'react';
import { FirstName } from './FirstName';
import { LastName } from './LastName';

export const ReduxStateChange = () => {
  return (
    <div className="stateChange">
      <h3>Redux Toolkit State Change</h3>
      <input type="text" placeholder="Имя..." />
      <input type="text" placeholder="Фамилия..." />
      <div className="outputInfo">
        <FirstName />
        <LastName />
      </div>
    </div>
  );
};
