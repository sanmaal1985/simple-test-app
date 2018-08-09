'use strict';

const router = require('express').Router();
const { User } = require('../models')

router.get('/', async (req, res) => {
    const users = await User.find();
    console.log(users);    
});

module.exports = router;