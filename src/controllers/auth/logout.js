const errorResponse = require("../../response/errorResponse")
const successResponse = require("../../response/successResponse")

const logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token.token !== req.token)

        await req.user.save()

        const { response } = successResponse({
            data: null,
            message: 'Cierre de sesión exitoso'
        })
        res.json(response);
    } catch (error) {
        const { response } = errorResponse({ message: error.message, statusCode: res.statusCode })
        res.json(response);
    }
}

module.exports = logout