import React, { useState, useCallback } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { todosSelector, createTodo } from './store';

const App: React.FC = () => {
  const [text, setText] = useState('');
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  const changeText = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }, []);
  const addTodo = useCallback(() => {
    dispatch(createTodo(text));
    setText('');
  }, [dispatch, text]);

  return (
    <div className="app">
      <div className="form">
        <input type="text" value={text} onChange={changeText} />
        <button onClick={addTodo}>add</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
