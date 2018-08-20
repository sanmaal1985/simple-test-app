'use strict';

const mongoose = require('mongoose');

const { getConString } = require('../server/config');
const { Pokemon } = require('../server/models');

const initData = require('../data/pokemons.json');

const initDB = (conString) => {
    return mongoose.connect(conString, { useNewUrlParser: true })
        .then(async () => {
            try {
                await Pokemon.insertMany(initData.pokemons);
            } catch (err) {
                console.error(err);
            }
        })
};

(async (conString) => {
    await initDB(conString);
    mongoose.disconnect();
})(getConString());