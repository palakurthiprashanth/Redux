import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions/CounterActions';

const CounterComponent = () => {
  const count = useSelector(state => state.countReducer);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
    </div>
  );
};
export default CounterComponent;
