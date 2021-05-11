import axios from 'axios';

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      dispatch({
        type: 'FETCH_POSTS_SUCCESS',
        payload: response.data
      });
    } catch (err) {
      console.log('error');
      dispatch({
        type: 'FETCH_POSTS_FAILURE',
        error: 'Something Went Wrong.'
      });
    }
  };
};
