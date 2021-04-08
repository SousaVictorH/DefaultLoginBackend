const routes = require('express').Router();

const { login } = require('../request-response-http/login')

routes.post('/', login);

module.exports = routes;