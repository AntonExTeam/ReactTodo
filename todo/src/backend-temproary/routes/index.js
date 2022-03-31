const express = require('express');
const router = express.Router();

const todoController = require('../controllers');

router.post('/create',todoController.createTodo);
router.put('/text',todoController.changeTodoText);
router.delete('/delete',todoController.deleteTodo);

module.exports = router;
