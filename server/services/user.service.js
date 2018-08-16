const bcrypt = require('bcryptjs');

const { User } = require('../models');

class UserService {

    create(user) {
        return User.create(Object.assign(user, { password: bcrypt.hashSync(user.password) }));            
    }

    findAll(conditions = {}, fields = ['username', 'name.firstName', 'name.lastName']) {
        return User.find(conditions).select(fields.join(' ')).exec();
    }
}

module.exports = new UserService();