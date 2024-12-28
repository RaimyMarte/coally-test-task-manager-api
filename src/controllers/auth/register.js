const User = require("../../models/user")
const errorResponse = require("../../response/errorResponse")
const successResponse = require("../../response/successResponse")

const register = async (req, res) => {
    const user = new User(req.body)
    const { email } = req.body

    try {
        const userByEmail = await User.findOne({ email })

        if (userByEmail)
            throw new Error('El email ya está en uso')

        await user.save()

        const { response } = successResponse({ data: user })
        res.json(response);
    } catch (error) {
        const { response } = errorResponse({ message: error.message, statusCode: res.statusCode })
        res.json(response);
    }
}

module.exports = register