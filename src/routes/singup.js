const routes = require('express').Router();

const { signUp } = require('../request-response-http/signUp')

routes.post('/', signUp);

module.exports = routes;