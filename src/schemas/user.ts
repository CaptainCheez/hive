const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false
    }
});

export const User = mongoose.model('User', userSchema); 