import { Request, Response } from 'express';
import { handleUnknownError, successResponse } from "../../response";
import User from '../../models/user';

interface SignUpBody {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const signUp = async (req: Request, res: Response): Promise<void> => {
    const user = new User(req.body)
    const { email, password, confirmPassword }: SignUpBody = req.body

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
        handleUnknownError({ error, res, })
    }
}