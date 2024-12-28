const clientResponse = require("./clientResponse");

const defaultTitle = 'La acción no pudo ser realizada.'
const defaultMessage = "Lo sentimos, su solicitud no se pudo completar."

const errorResponse = (error) => {
    const { title, message, statusCode } = error

    const response = clientResponse({
        data: null,
        isSuccess: false,
        message: message || defaultMessage,
        statusCode: statusCode || 500,
        title: title || defaultTitle,
    })

    return {
        response
    }
}

module.exports = errorResponse