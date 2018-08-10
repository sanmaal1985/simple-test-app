'use strict';

const {secret, expiresIn} = require('./secret');
module.exports = {
    getConString: require('./connection'),
    secret,
    expiresIn
};