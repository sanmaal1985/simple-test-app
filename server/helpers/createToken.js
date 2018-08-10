'use strict';
const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../config');

module.exports = (payload) => jwt.sign(payload, secret, { expiresIn });