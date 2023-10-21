import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
};

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(setPosts(res.data));
  }
);

export const deletePosts = createAsyncThunk(
  'posts/removePost',
  async (id, { rejectWithValue, dispatch }) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch(removePost(id));
  }
);

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((p) => p.id !== action.payload);
    },
  },
  extraReducers: {
    [getPosts.fulfilled]: () => console.log('getPosts: fullfield'),
    [getPosts.pending]: () => console.log('getPosts: pending'),
    [getPosts.rejected]: () => console.log('getPosts: rejected'),
    [deletePosts.fulfilled]: () => console.log('deletePosts: fullfield'),
    [deletePosts.pending]: () => console.log('deletePosts: pending'),
    [deletePosts.rejected]: () => console.log('deletePosts: rejected'),
  },
});

export const { setPosts, removePost } = postSlice.actions;
export default postSlice.reducer;
