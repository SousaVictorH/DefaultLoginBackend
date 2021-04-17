const MissingParamError = ({ source, param }) => {
    throw {
        error: {
            source,
            message: `missing param error - ${param}`,
            statusCode: 400
        }
    }
}

module.exports = MissingParamError