const { badRequest } = require('../../../helpers/httpResponse');
const { userAlreadyExist } = require('../../../helpers/messages');

const { UserModel } = require('../../models');

module.exports = async (userModel, repositoryInstance) => {
    try {
        const { email } = userModel;
        const existUser = await repositoryInstance.read({ email });

        if (existUser)
          throw badRequest({
            source: 'controller - singUp',
            message: userAlreadyExist,
          });

        const user = await repositoryInstance.create(userModel);

        return UserModel(user);
    } catch (error) {
        throw error;
    }
};