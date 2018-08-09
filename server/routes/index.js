const users = require('./users');
const init = (app) => {
    app.use('/api/users', users)
};

module.exports = { init };