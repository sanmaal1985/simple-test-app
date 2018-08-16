'use strict';

const router = require('express').Router();
const bodyParser = require('body-parser');
const { userService } = require('../services');

router.use(bodyParser.json());

router.get('/', async (req, res) => {
    userService.findAll()
        .then(users => res.status(200).send(users))
        .catch(error => res.status(500).send(error));
});

module.exports = router;