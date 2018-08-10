'use strict';

const router = require('express').Router();
const bodyParser = require('body-parser');
const { User } = require('../models')

router.use(bodyParser.json());

router.get('/', async (req, res) => {
    const users = await User.find({}, 'username name.firstName name.lastName').exec();
    res.status(200).send(users);
});

module.exports = router;