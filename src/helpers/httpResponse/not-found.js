module.exports = (source, entity) => {
    throw {
        error: {
            source,
            message: entity + ' not found',
            statusCode: 404
        }
    }
}