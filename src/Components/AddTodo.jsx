// src/components/AddTodo.js
import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = ({ setTodos }) => {
  const [task, setTask] = useState('');

  const addTodo = async (e) => {
    e.preventDefault();
    if (task.trim() === '') return;

    const res = await axios.post('http://localhost:5000/todos', { task });
    setTodos((prevTodos) => [...prevTodos, res.data]);
    setTask('');
  };

  return (
    <form className="add text-center my-4" onSubmit={addTodo}>
      <label className="text-light">Add a new todo...</label>
      <input
        className="form-control m-auto"
        type="text"
        name="add"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <br />
      <div className="text-center">
        <input type="submit" className="btn btn-light" value="Add Todo" />
      </div>
    </form>
  );
};

export default AddTodo;
