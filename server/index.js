'use strict';
const express = require('express');
const mongoose = require('mongoose');

const Routes = require('./routes');

const { getConString } = require('./config');
const { authCheck } = require('./middlewares');
const { APP_PORT } = process.env;

async function start() {

    const app = express();
    const isMongoInitialize = await initMongoose();

    console.log(`DB connection is initialized: ${isMongoInitialize}`);

    app.use(authCheck());
    Routes.init(app);

    return new Promise((resolve, reject) => {
        app.listen(APP_PORT, (err) => {
            err ? reject(err) : resolve(APP_PORT);
        });
    });
}

async function initMongoose() {
    try {
        await mongoose.connect(getConString(), { useNewUrlParser: true });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

module.exports = start;