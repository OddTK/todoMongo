const router = require('express').Router();
const {
    createTodo,
    getTodos,
    getTodoById,
    updateTodoById,
    deleteTodoById,
} = require('../../../controller/todoController');

router.route('/')
    .post(createTodo)
    .get(getTodos);

router.route('/:todoId')
    .get(getTodoById)
    .put(updateTodoById)
    .delete(deleteTodoById);

module.exports = router;
