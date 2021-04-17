const PasswordDatabaseMongoDB = require('../infra/database/mongodb/adapters/PasswordRecoveryDatabaseMongoDB');

const { serverError } = require('../helpers/httpResponse');

const PasswordRecoveryDatabase = {
    async create(email, token) {
        try {
            if (await this.read(email)) {
                PasswordDatabaseMongoDB.update(email, token);
                return;
            }
            return await PasswordDatabaseMongoDB.create(email, token);
        } catch (error) {
            throw serverError('PasswordDatabase - create', '');
        }
    },
    async read(email) {
        try {
            return await PasswordDatabaseMongoDB.read(email);
        } catch (error) {
            throw serverError('PasswordDatabase - read', '');
        }
    },
    async remove(obj) {
        try {
            await obj.delete();
        } catch (error) {
            throw serverError('PasswordDatabase - delete', '');
        }
    },
};

module.exports = PasswordRecoveryDatabase;
