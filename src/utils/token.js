const jwt = require('jsonwebtoken');
const { authConfig } = require('../resourses');

module.exports = {
    generateToken(id) {
        return jwt.sign({ id }, authConfig.secret, { expiresIn: 86400, })
    }
};
