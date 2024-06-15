// src/components/TodoList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get('http://localhost:5000/todos');
      setTodos(res.data);
    };

    fetchTodos();
  }, []);

  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <header className="text-center text-light my-4">
        <h1 className="mb-4">Todo List</h1>
        <form className="search">
          <input
            className="form-control m-auto"
            type="text"
            name="search"
            placeholder="search todos"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </header>

      <ul className="list-group todos mx-auto text-light delete">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} setTodos={setTodos} />
        ))}
      </ul>

      <AddTodo setTodos={setTodos} />
    </div>
  );
};

export default TodoList;
