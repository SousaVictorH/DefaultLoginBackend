const { badRequest } = require('../../../helpers/httpResponse');
const { userNotFound } = require('../../../helpers/messages');

const { UserModel } = require('../../models');

const Login = async (email, password, repositoryInstance, matchPassword) => {
    try {
        const user = await repositoryInstance.read({ email });

        if (!user)
            throw badRequest({ source: 'useCase - login', message: userNotFound });

        const match = await matchPassword(password, user.password,)

        if (!match) return false

        delete user.password;

        return UserModel(user);
    } catch (error) {
        throw error
    }
}

module.exports = Login