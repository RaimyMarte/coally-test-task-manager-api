import { Request, Response } from 'express';
import { handleUnknownError, successResponse } from "../../response";
import User from '../../models/user';

interface LoginBody {
    email: string;
    password: string;
}

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password }: LoginBody = req.body

    try {
        const formattedEmail = email.toLowerCase().trim()

        const user = await User.findByCredentials(formattedEmail, password)
        const token = await user.generateAuthToken()

        const filteredUser = user.toObject();
        filteredUser.password = undefined;
        filteredUser.tokens = undefined;

        const { response } = successResponse({
            data: {
                user: filteredUser,
                token
            },
            message: 'Inicio de sesión exitoso'
        })
        res.json(response);
    } catch (error) {
        handleUnknownError({ error, res, statusCode: 401 })
    }
}