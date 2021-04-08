const routes = require('express').Router();

const singup = require('./singup');
const login = require('./login');

routes.use('/singup', singup);
routes.use('/login', login);

module.exports = routes;
