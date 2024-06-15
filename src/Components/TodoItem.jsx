import React from 'react';
import axios from 'axios';

const TodoItem = ({ todo, setTodos }) => {
    const toggleComplete = async () => {
        const res = await axios.put(`http://localhost:5000/todos/${todo._id}`);
        setTodos(prevTodos => prevTodos.map(t => t._id === todo._id ? res.data : t));
    };

    const deleteTodo = async () => {
        await axios.delete(`http://localhost:5000/todos/${todo._id}`);
        setTodos(prevTodos => prevTodos.filter(t => t._id !== todo._id));
    };

    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={toggleComplete} 
                style={{ marginRight: '10px' }} // Add margin to the right of the checkbox
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>{todo.task}</span>
            <i 
                onClick={deleteTodo} 
                className="far fa-trash-alt delete" 
                style={{ marginLeft: '10px', cursor: 'pointer' }} // Add margin to the left of the trash icon
            ></i>
        </div>
    );
};

export default TodoItem;
