const UsersController = require('../controllers/UsersController');

module.exports = {
    async update(req, res) {
        try {
            const {
                userID,
                name,
                genre,
                dateOfBirth,
                email,
                password,
                phone,
                address,
              } = req.body;

              await UsersController.update({
                userID,
                name,
                genre,
                dateOfBirth,
                email,
                password,
                phone,
                address,
              });

              return res.status(200).json();
        } catch (error) {
            const { statusCode } = error.error;
            error.error.source = undefined;
            return res.status(statusCode).json(error);
        }
    }
};