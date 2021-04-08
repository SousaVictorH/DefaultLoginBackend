const badRequest = require('./bad-request');
const missingParamError = require('./missing-param-error');
const notFound = require('./not-found');
const serverError = require('./server-error');

module.exports = {
    badRequest,
    missingParamError,
    notFound,
    serverError,
}