'use strict';
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    name: {
        firstName: String,
        lastName: String
    }
});

module.exports = mongoose.model('User', userSchema);