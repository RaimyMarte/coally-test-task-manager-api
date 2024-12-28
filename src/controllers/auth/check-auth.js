const errorResponse = require("../../response/errorResponse")
const successResponse = require("../../response/successResponse")

const checkAuth = async (req, res) => {
    try {
        const { response } = successResponse({
            data: {
                user: req.user,
                token: req.token
            },
        })
        res.json(response);
    } catch (error) {
        const { response } = errorResponse({ message: error.message, statusCode: res.statusCode })
        res.json(response);
    }
}

module.exports = checkAuth