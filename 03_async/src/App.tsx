import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todosSelector, fetchAllTodos, createTodo } from './store';

import './App.css';

const App: React.FC = () => {
  const [text, setText] = useState('');
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  const changeText = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }, []);

  const addTodo = useCallback(() => {
    const todo = { title: text };

    dispatch(createTodo({ todo }));
  }, [text]);

  return (
    <div className="app">
      <div className="form">
        <input type="text" value={text} onChange={changeText} />
        <button onClick={addTodo}>add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
