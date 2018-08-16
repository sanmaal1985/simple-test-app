const users = require('./user.routes');
const auth = require('./auth.routes');

const init = (app) => {
    app.use('/api/users', users);
    app.use('/api/auth', auth)
};

module.exports = { init };