const { UserModel } = require('../domain/models');

const UsersDatabaseMongoDB = require('../infra/database/mongodb/adapters/UserDatabaseMondoDB');

const { serverError } = require('../helpers/httpResponse');
const { objects } = require('../utils');

module.exports = {
    async create(user) {
        try {
            const newUser = await UsersDatabaseMongoDB.create(user);
            
            return UserModel(newUser);
        } catch (error) {
            throw serverError('UsersDatabase - createUser', '');
        }
    },

    async read(filters = { _id, email }) {
        try {
            objects.removeUndefinedParams(filters);

            return await UsersDatabaseMongoDB.read(filters);
        } catch (error) {
            throw serverError('UsersDatabase - getUser', '');
        }
    }
};