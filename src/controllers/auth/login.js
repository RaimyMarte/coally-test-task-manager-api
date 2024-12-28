const User = require("../../models/user")
const errorResponse = require("../../response/errorResponse")
const successResponse = require("../../response/successResponse")

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findByCredentials(email, password)
        const token = await user.generateAuthToken()

        user.password = undefined;
        user.tokens = undefined;

        const { response } = successResponse({
            data: {
                user,
                token
            },
            message: 'Inicio de sesión exitoso'
        })
        res.json(response);
    } catch (error) {
        const { response } = errorResponse({
            message: error.message,
            statusCode: 401
        });
        res.json(response);
    }
}

module.exports = login