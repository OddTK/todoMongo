const { Schema, model } = require('mongoose');
// The Shema is very similar to the 'Class' tjat we were creating in Sequelize
const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        minLength: 4,
        maxLength: 8,
    },
    role: {
        type: String,
        // an enum on a String type means that when we save this field to the database,
        // it can only be one of the specified values in the enum array.
        enum: ['Admin', 'Employee', 'Manager'],
    },
    powerLevel: {
        type: Number,
        min: 1,
        max: 9000,
    },
});

const User = model('User', userSchema);

module.exports = User;
