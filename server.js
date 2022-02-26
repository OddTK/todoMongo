const mongoose = require('mongoose');
const User = require('./model/User');
const Todo = require('./model/todo');

mongoose.connect('mongodb://localhost:27017/todoMongoDB')
    .then(async() => {
        console.log('Connected to MongoDB');
        const newUser = await User.create({
            username: 'OddTK',
            role: 'Employee',
            powerLevel: '9000'
        });
        const newTodo = await Todo.create({
            text: 'Do homework',
        })
        console.log(newUser);
        console.log(newTodo);
    })
    .catch(err => console.log(err))
