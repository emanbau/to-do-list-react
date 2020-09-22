import React from 'react';
import './App.css';
import Todoform from './components/Todoform';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="Todo-app">
      <Todolist />
    </div>
  );
}

export default App;
