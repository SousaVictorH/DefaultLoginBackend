const routes = require('express').Router();

const tokenAuth = require('../middlewares/tokenVerification');

const { update } = require('../request-response-http/users');

routes.patch('/update', tokenAuth, update);

module.exports = routes;
