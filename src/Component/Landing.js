import React, { useState } from 'react';
import { signOut } from "firebase/auth";
import auth from '../Config';
import { useNavigate } from 'react-router-dom';
import '../Landing.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate()

  const signoutfunc = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
        navigate('/')
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <button onClick={signoutfunc}>Sign Out</button>
    <div className="App">
      <h1>Todo List</h1>
      
      <div>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div></div>
  );
}

export default App;
