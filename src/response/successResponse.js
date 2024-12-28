const clientResponse = require("./clientResponse");

const defaultTitle = 'Acción realizada.'
const defaultMessage = "Solicitud completada con éxito."

const successResponse = ({ data = null, title, message }) => {
    const response = clientResponse({
        data,
        isSuccess: true,
        message: message || defaultMessage,
        statusCode: 200,
        title: title || defaultTitle,
    })

    return {
        response
    }
}

module.exports = successResponse