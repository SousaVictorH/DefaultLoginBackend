const RecoverController = require('../controllers/RecoverController');

module.exports = {
    async recovery(req, res){
        try {
            const { email } = req.body;

            await RecoverController.recovery(email);

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

            await RecoverController.update(email, token, password);

            return res.status(200).json()      
        } catch (error) {
            const { statusCode } = error.error;
            error.error.source = undefined;
            return res.status(statusCode).json(error);
        }
    }
}