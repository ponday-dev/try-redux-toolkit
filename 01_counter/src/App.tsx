import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { counterSelector, increment, decrement } from './store';

import './App.css';

const App: React.FC = () => {
  const counter = useSelector(counterSelector);
  const dispatch = useDispatch();

  const onClickIncrement = useCallback(() => dispatch(increment()), [dispatch]);
  const onClickDecrement = useCallback(() => dispatch(decrement()), [dispatch]);

  return (
    <div className="app">
      <button onClick={onClickDecrement}>-</button>
      <div>{counter}</div>
      <button onClick={onClickIncrement}>+</button>
    </div>
  )
}

export default App;
