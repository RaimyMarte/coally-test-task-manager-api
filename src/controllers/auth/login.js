const User = require("../../models/user")
const errorResponse = require("../../response/errorResponse")
const successResponse = require("../../response/successResponse")

const login = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()

        const { response } = successResponse({
            data: {
                user,
                token
            },
        })
        res.json(response);
    } catch (error) {
        const { response } = errorResponse({ message: error.message, statusCode: res.statusCode })
        res.json(response);
    }
}

module.exports = login