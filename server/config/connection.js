'use strict';

const { DB_USER, DB_PWD, DB_NAME, DB_HOST, DB_PORT} = process.env;

module.exports = (withoutAuth = false) => withoutAuth ? `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}` : `mongodb://${DB_USER}:${DB_PWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;