const routes = require('express').Router();

const singup = require('./singup');
const login = require('./login');
const user = require('./user');

// RETURNS API VERSION
routes.get('/', (req, res) => {
    return res.send('API V 1.0');
})

routes.use('/signup', singup);
routes.use('/login', login);
routes.use('/user', user);

module.exports = routes;
