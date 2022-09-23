const ErrorCodes = {
    NOT_FOUND: 404,
    INVALID_REQUEST: 400,
};

const Errors = {
    NOT_FOUND: {
        message: "No corresponding data was found.",
        errorCode: ErrorCodes.NOT_FOUND
    },
    INVALID_REQUEST: {
        message: "Invalid request; please check for proper input.",
        errorCode: ErrorCodes.INVALID_REQUEST
    }
};

module.exports = Errors;