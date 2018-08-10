'use strict';

const router = require('express').Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const { createToken } = require('../helpers');
const { User } = require('../models');

router.use(bodyParser.json());

router.post('/register', (req, res) => {

    User.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password),
        name: {
            firstName: '',
            lastName: ''
        }
    })
        .then((user) => {
            res.status(200).send({ token: createToken({ id: user._id }) });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Registration failed');
        });
});

module.exports = router;