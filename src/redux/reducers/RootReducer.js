import { combineReducers } from 'redux';
import { CounterReducer } from './CounterReducer';
import { PostsReducer } from './PostsReducer';

const root = combineReducers({
  countReducer: CounterReducer,
  postReducer: PostsReducer
});
export default root;
