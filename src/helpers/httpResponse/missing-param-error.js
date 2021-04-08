const MissingParamError = ({ source, param }) => {
    return {
        error: {
            source,
            message: `missing param error - ${param}`,
            statusCode: 400
        }
    }
}

module.exports = MissingParamError