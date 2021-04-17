const EmailController = require('./EmailController');

const UserDatabase = require('../databases/UsersDatabase');
const PasswordRecoveryDatabase = require('../databases/PasswordRecoveryDatabase');

const { badRequest } = require('../helpers/httpResponse');

const { badRequest } = require('../helpers/httpResponse');
const { userNotFound, dataMalformed } = require('../helpers/messages');

const sendRecoveryEmailTemplate = require('../resourses/templates/template-send-recover-email');

const { generateRandomHash, encrypter } = require('../utils');

const {
    GetUser,
    PassCreate,
    PassRead,
    PassRemove,
    Update
} = require('../domain/useCases');

module.exports = {
    async recovery(email){
        try {
            const user = await GetUser(undefined, email, UserDatabase);

            if (!user) {
                throw badRequest({
                    source: 'controller - password recovery',
                    message: userNotFound,
                });
            }

            const token = generateRandomHash({
                data: [user.email, user.id_max_db],
            }).slice(0, 6);

            const { subject, text } = sendRecoveryEmailTemplate(token);

            await EmailController.sendMail({
                to: email,
                subject,
                text
            })

            await PassCreate(email, token, PasswordRecoveryDatabase);
        } catch (error) {
            
        }
    },

    async update(email, token, password){
        try {
            const object = await PassRead(email, PasswordRecoveryDatabase);

            if (!object || object.token !== token) {
                throw badRequest({
                    source: 'controller - password recovery',
                    message: dataMalformed,
                });
            }

            const passwordEncrypted = await encrypter(password);

            const filters = { email };
            const data = { password: passwordEncrypted };

            await Update(filters, data, UserDatabase);

            await PassRemove(object, PasswordRecoveryDatabase);
        } catch (error) {
            throw error;
        }
    }
}