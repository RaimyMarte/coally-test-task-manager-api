const User = require("../../models/user")
const errorResponse = require("../../response/errorResponse")
const successResponse = require("../../response/successResponse")

const signUp = async (req, res) => {
    const user = new User(req.body)
    const { email, password, confirmPassword } = req.body

    try {
        const formattedEmail = email.toLowerCase().trim()
        const userByEmail = await User.findOne({ email: formattedEmail })

        if (userByEmail)
            throw new Error('El correo electrónico ya está en uso')

        if (password !== confirmPassword)
            throw new Error('Las contraseñas no coinciden')

        await user.save()

        const { response } = successResponse({
            data: user,
            message: 'Registro exitoso'
        })
        res.json(response);
    } catch (error) {
        const { response } = errorResponse({ message: error.message, statusCode: res.statusCode })
        res.json(response);
    }
}

module.exports = signUp