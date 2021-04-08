const UsersController = require('../controllers/UsersController')

module.exports = {
    async login(req, res) {
        try {
            const {
                email,
                password,
            } = req.body

            const user = await UsersController.login(email, password);

            return res.status(200).json(user);
        } catch (error) {
            const { statusCode } = error.error;
            error.error.source = undefined;
            return res.status(statusCode).json(error);
        }
    },
}