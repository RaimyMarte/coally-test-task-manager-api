import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import mongoose, { Document, Model, Schema } from 'mongoose';
import validator from 'validator';
dotenv.config();

const secretJWTKey = process.env.SECRET_JWT_KEY || '';

export interface IToken {
    token: string;
}

export interface IUser extends Document {
    name: string;
    password: string;
    email: string;
    tokens: IToken[];
    createdAt: Date;
    generateAuthToken(): Promise<string>;
}

export interface IUserModel extends Model<IUser> {
    findByCredentials(email: string, password: string): Promise<IUser>;
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: [8, 'Minimo 8 caracteres'],
        validate(value: string) {
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
        required: true,
        unique: true,
        lowercase: true,
        validate(value: string) {
            if (!validator.isEmail(value)) {
                throw new Error('El Email no es válido');
            }
        },
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});


userSchema.methods.generateAuthToken = async function (): Promise<string> {
    const user = this as IUser;
    const token = jwt.sign({ _id: user._id.toString() }, secretJWTKey);
    user.tokens = user.tokens.concat({ token });
    
    await user.save();

    return token;
};


userSchema.statics.findByCredentials = async function (
    email: string,
    password: string
): Promise<IUser> {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Credenciales incorrectas');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Credenciales incorrectas');

    return user;
};


userSchema.pre('save', async function (next) {
    const user = this as IUser;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

const User: IUserModel = mongoose.model<IUser, IUserModel>('User', userSchema);

export default User;
