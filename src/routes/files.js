const routes = require('express').Router();

const tokenAuth = require('../middlewares/tokenVerification');

const { upload } = require('../request-response-http/files')

routes.post('/', tokenAuth, upload);

module.exports = routes;