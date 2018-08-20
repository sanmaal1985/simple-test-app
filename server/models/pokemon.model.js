'use strict';
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const pokemonSchema = new Schema({
    id: String,
    name: String
});

module.exports = mongoose.model('Pokemon', pokemonSchema);