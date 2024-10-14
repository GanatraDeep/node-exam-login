const mongoose = require('../database/connect');
const Role = require('./Role.model');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unqiue: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: Role
    }
}, {timestamps: true})

const User = mongoose.model('User', schema);
module.exports = User;