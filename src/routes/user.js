const routes = require('express').Router();

const { update } = require('../request-response-http/users');

routes.patch('/update', update);

module.exports = routes;
