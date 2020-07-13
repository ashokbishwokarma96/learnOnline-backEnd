const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    email: {
        type: mongoose.Schema.Types.String,
        ref: 'User',
        required: true
    },
   
    courseName: {
        type: String
    },
    feedback: {
        type: String
    }
})

const comments = mongoose.model("Comment",commentSchema);


module.exports = comments
