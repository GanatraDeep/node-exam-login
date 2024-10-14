const mongoose = require('../database/connect');

const schema = new mongoose.Schema({
    role: {
        type: String,
        unique: true,
        required: true
    }
}, {timestamps: true});

const Role = mongoose.model('Role', schema);

module.exports = Role;