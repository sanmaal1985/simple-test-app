const jwt = require('jsonwebtoken');

const { secret } = require('../config');

'use strict';

module.exports = () => (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, secret, (error, decoded) => {
            if (error) {
                res.status(401).json({ error });
            } else {
                req.user = { ...decoded };
                next();
            }
        });
    } else {
        next();
    }
};