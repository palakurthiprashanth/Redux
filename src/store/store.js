import { createStore, applyMiddleware } from 'redux';
import root from '../redux/reducers/RootReducer';
import { LoggerMiddleWare } from '../middleware/LoggerMiddleware';
import thunk from "redux-thunk";

const store = createStore(root, applyMiddleware(LoggerMiddleWare, thunk));
export default store;
