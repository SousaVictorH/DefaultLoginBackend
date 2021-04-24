const FilesController = require('../controllers/FilesController');

module.exports = {
    async upload(req, res) {
        try {
            const {
                userID,
                fileName,
                uri,
                type
              } = req.body;

              await FilesController.upload({
                  userID,
                  fileName,
                  type,
                  uri
              });

              return res.status(200).json();
        } catch (error) {
            const { statusCode } = error.error;
            error.error.source = undefined;
            return res.status(statusCode).json(error);
        }
    }
};