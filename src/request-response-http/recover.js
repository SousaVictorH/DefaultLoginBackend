const RecoverControlle = require('../controllers/RecoverControlle');

module.exports = {
    async recovery(req, res){
        try {
            const { email } = req.body;

            await RecoverControlle.recovery(email);

            return res.status(200).json()            
        } catch (error) {
            const { statusCode } = error.error;
            error.error.source = undefined;
            return res.status(statusCode).json(error);
        }
    },

    async update(req, res){
        try {
            const { email, token, password } = req.body;

            await RecoverControlle.update(email, token, password);

            return res.status(200).json()      
        } catch (error) {
            const { statusCode } = error.error;
            error.error.source = undefined;
            return res.status(statusCode).json(error);
        }
    }
}