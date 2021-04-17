const routes = require('express').Router();

const tokenAuth = require('../middlewares/tokenVerification');

const { recovery, update } = require('../request-response-http/recover');

routes.post('/', tokenAuth, recovery);
routes.post('/update', tokenAuth, update);

module.exports = routes;
