const users = require('./users');
const auth = require('./auth');

const init = (app) => {
    app.use('/api/users', users);
    app.use('/api/auth', auth)
};

module.exports = { init };