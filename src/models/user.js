const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('./task')

const secretJWTKey = process.env.SECRET_JWT_KEY || ''

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: [8, 'Minimo 8 caracteres'],
        validate(value) {
            // Check if the password contains at least one lowercase letter, one uppercase letter, and one number
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            if (!regex.test(value)) {
                throw new Error(
                    'La contraseña debe contener al menos una letra minúscula, una letra mayúscula y un número.'
                );
            }
        },
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('El Email no es válido')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id.toString() }, secretJWTKey)

    this.tokens = this.tokens.concat({ token })
    await this.save()

    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) throw new Error('Credenciales incorrectas')

    const isMatch = bcrypt.compare(password, user.password)

    if (!isMatch) throw new Error('Credenciales incorrectas')


    return user
}


userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = bcrypt.hash(user.password, 8)
    }

    next()
})


userSchema.pre('remove', async function (next) {
    await Task.deleteMany({ owner: this._id })

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User