import React from 'react';
import { PostItem } from './PostItem';

export const Posts = () => {
  return (
    <div>
      <h3>Redux Toolkit Async Thunk</h3>
      <button type="submit">Получить посты</button>
      <PostItem />
    </div>
  );
};
