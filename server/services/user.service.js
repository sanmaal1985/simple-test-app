const bcrypt = require('bcryptjs');

const { User } = require('../models');

'use strict';

class UserService {

    create(user) {
        return User.create(Object.assign(user, { password: bcrypt.hashSync(user.password) }));
    }

    findAll(conditions = {}, fields = ['username', 'name.firstName', 'name.lastName']) {
        return User.find(conditions).select(fields.join(' ')).exec();
    }

    async authenticate({ username, password }) {
        try {
            const user = await User.findOne({ username }).select('password').exec();
            
            if (!user) {
                throw 'Incorrect username';
            }
            if (bcrypt.compareSync(password, user.password)) {
                return user;
            }
            throw 'Incorrect password';
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = new UserService();