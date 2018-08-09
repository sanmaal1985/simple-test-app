'use strict';
const server = require('./server');

server()
    .then(() => console.log('Server is started'))
    .catch((err) => console.error(`Server is down: ${err}`));