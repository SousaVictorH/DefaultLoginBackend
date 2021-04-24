const UserController = require('./UsersController');

const { badRequest } = require('../helpers/httpResponse');
const { userNotFound } = require('../helpers/messages');

module.exports = {
    async upload({ userID, fileName, type, uri }) {
        try {

            const user = UserController.getUser({ userID });

            if (!user) {
                throw badRequest({
                    source: 'controller - password recovery',
                    message: userNotFound,
                });
            }

            console.log(fileName, type, uri);
            
        } catch (error) {
            throw error;
        }
    }
};