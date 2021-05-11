import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/action-creators/PostsActionCreator';

const PostsComponent = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.postReducer);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const renderPosts = () => {
    if (state.loading) {
      return <h1>Loading...</h1>;
    }
    if (state.items) {
      return state.items.map(data => {
        return <h2 key={data.id}>{data.title}</h2>;
      });
    }
    if (state.error) {
      return <h2>Some thing went wrong.</h2>;
    }
  };
  return <div>{renderPosts()}</div>;
};
export default PostsComponent;
