import React from 'react';
import { PostItem } from './PostItem';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../features/post/postSlice';

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  return (
    <div>
      <h3>Redux Toolkit Async Thunk</h3>
      <button type="submit" onClick={() => dispatch(getPosts())}>
        Получить посты
      </button>
      {posts?.map((p) => (
        <PostItem key={p.title} post={p} />
      ))}
    </div>
  );
};
