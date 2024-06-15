const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/todolist', { useNewUrlParser: true, useUnifiedTopology: true });

const todoSchema = new mongoose.Schema({
    task: String,
    completed: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

// API Endpoints
app.get('/todos', async(req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

app.post('/todos', async(req, res) => {
    const newTodo = new Todo({
        task: req.body.task,
        completed: false
    });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
});

app.put('/todos/:id', async(req, res) => {
    const todo = await Todo.findById(req.params.id);
    todo.completed = !todo.completed;
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
});

app.delete('/todos/:id', async(req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});