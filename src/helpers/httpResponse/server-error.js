module.exports = (source, message) => {
    throw {

        error: {
            source: source,
            message: 'internal error ' + message,
            statusCode: 500
        }

    }
}