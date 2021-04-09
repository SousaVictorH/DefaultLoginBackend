const { serverError } = require('../helpers/httpResponse');

const { SendMail } = require('../domain/useCases');

const source = 'SendMail - Controller';

module.exports = {
    async sendMail({ to, subject, text}) {
        try {

            await SendMail(to, subject, text);
            
        } catch (error) {
            throw serverError(source, '');
        }
    }
};