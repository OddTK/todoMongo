const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');
// The Shema is very similar to the 'Class' tjat we were creating in Sequelize
const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        // sets required to true and sers our own custom error message when not passed in
        // 1st el, whether required or not
        // 2nd el, custom error message
        required: [true, 'Username is required and must be a minimum of 4 and max length of 8'],
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: {
            // actual value for email that the user is providing
            validator: function(value) {
                return isEmail(value);
            },
            // userObject is the whole object that the user is trying to save - everything
            // {username: , email: , role: , powerLevel: ,}
            message: function(userObject) {
                return `${userObject.email} is not a valid email address`;
            }
        }
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
        default: 1,
    },
    hobbies: [String],
    twoFavoriteCryptos: {
        firstFavorite: {
            type: String,
            uppercase: true,
            trim: true,
        },
        secondFavorite: {
            type: String,
            uppercase: true,
            trim: true,
        }
    }
});

    // called Model methods
userSchema.statics.findByRole = async function(role) {
    return await this.find({ role });
};

    // Instance methods
userSchema.methods.greeting = function () {
    console.log(`Hi my username is ${this.username} my role is ${this.role}`);
};

const User = model('User', userSchema);

module.exports = User;
