const UsersController = require('../controllers/UsersController');

module.exports = {
    async signUp(req, res) {
        try {
            const {
                name,
                genre,
                dateOfBirth,
                email,
                password,
                phone,
                address,
              } = req.body;

              const signUp = await UsersController.signUp(
                name,
                genre,
                dateOfBirth,
                email,
                password,
                phone,
                address,
              );

              return res.status(200).json(signUp);
        } catch (error) {
            const { statusCode } = error.error;
            error.error.source = undefined;
            return res.status(statusCode).json(error);
        }
    }
};