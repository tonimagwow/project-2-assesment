const express = require('express');
const router = express.Router();
const Todo = require('./../models/todo.js');


// Index
router.get('/', (req, res) => {
    Todo.find({}, (error, allTodos) => {
        res.render('Index', {
            todo: allTodos
        });
    });

});

// Create
router.post('/', (req, res) => {
    Todo.create(req.body, (error, createdTodo) => {
        res.redirect('/todo');
    });
});

// Delete

module.exports = router;