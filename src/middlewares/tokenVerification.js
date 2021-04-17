const jwt = require('jsonwebtoken');

const { authConfig } = require('../resourses');
const { noToken, unauthorized } = require('../helpers/messages');

module.exports = function (req, res, next) {
    const authHeader = req.headers.auth;

    if (!authHeader) {
        return res.status(401).send({
            error: noToken,
        });
    }

    jwt.verify(authHeader, authConfig.secret, function(err, decoded){
        if (err) {
            return res.status(500).send({
                error: unauthorized,
            });
        }

        req.userID = decoded._id;
        next();
    })
}