import React from 'react';
import { removePost } from '../../features/post/postSlice';
import { useDispatch } from 'react-redux';

export const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(removePost(post.id))}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
};
