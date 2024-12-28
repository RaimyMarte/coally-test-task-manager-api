const jwt = require('jsonwebtoken')
const User = require('../models/user')
const errorResponse = require('../response/errorResponse')

require('dotenv').config()


const auth = (async (req, res, next) => {
    try {
        const secretJWTKey = process.env.SECRET_JWT_KEY || ''

        const token = req.header('Authorization').replace('Bearer ', '')

        const decode = jwt.verify(token, secretJWTKey)
        const user = await User.findOne({ _id: decode._id, 'tokens.token': token })

        if (!user) throw new Error()

        req.token = token
        req.user = user

        next()

    } catch (error) {
        const { response } = errorResponse({
            title: 'Error de autenticación',
            message: error.message,
            statusCode: 401
        })
        res.json(response);
    }
})

module.exports = auth
