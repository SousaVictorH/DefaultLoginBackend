const BadRequest = ({ source, message, data }) => {
    throw {
        error: {
            source,
            message,
            data,
            statusCode: 400
        }
    }
}

module.exports = BadRequest