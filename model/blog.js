const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    likeIds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Like',
        }
    ],
    description: {
        type: String,
    }
});

const Blog = model('Blog', blogSchema);

module.exports = Blog;
