const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo');

router.post('/', todoController.createTodo);
router.get('/:id', todoController.getTodoById);
router.put('/:id', todoController.checkTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
