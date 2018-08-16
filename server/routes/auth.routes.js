'use strict';

const router = require('express').Router();
const bodyParser = require('body-parser');

const { userService } = require('../services');
const { createToken } = require('../helpers');

router.use(bodyParser.json());

router.post('/register', (req, res) => {

    const { username, password } = req.body;
    userService.create({
        username,
        password
    })
        .then((user) => res.status(200).send({ token: createToken({ id: user._id }) }))
        .catch((err) => {
            console.error(err);
            res.status(500).send('Registration failed');
        });
});

router.post('/login', async (req, res) => {
    userService.authenticate(req.body)
        .then((user) => res.status(200).send({ token: createToken({ id: user._id }) }))
        .catch(err => res.status(401).send(err));
});

module.exports = router;