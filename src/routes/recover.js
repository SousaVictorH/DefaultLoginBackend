const routes = require('express').Router();

const { recovery, update } = require('../request-response-http/recover');

routes.post('/', recovery);
routes.post('/update', update);

module.exports = routes;
