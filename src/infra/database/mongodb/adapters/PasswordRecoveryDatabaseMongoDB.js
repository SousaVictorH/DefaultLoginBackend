const { PasswordRecovery } = require('../models');
const { PasswordRecoveryModel } = require('../../../../domain/models');

const PasswordRecoveryDatabaseMongoDB = {
    async create(email, token) {
        try {
            const newPassword = await PasswordRecovery.create({ email, token });
            return PasswordRecoveryModel(newPassword);
        } catch (error) {
            throw error;
        }
    },
    async read(email) {
        try {
            return await PasswordRecovery.findOne({ email });
        } catch (error) {
            throw error;
        }
    },
    async update(email, token) {
        try {
            await PasswordRecovery.findOne({ email }, (err, item) => {
                item.token = token;
                item.save();
            });
        } catch (error) {
            throw error;
        }
    },
};

module.exports = PasswordRecoveryDatabaseMongoDB;
