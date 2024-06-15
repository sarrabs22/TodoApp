// src/App.js
import React from 'react';
import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './App.css';

const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
};

export default App;
