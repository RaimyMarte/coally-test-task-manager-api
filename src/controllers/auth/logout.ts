import { Request, Response } from 'express';
import { handleUnknownError, successResponse } from "../../response";

export const logout = async (req: Request, res: Response): Promise<void> => {
    const { user, token: currentToken } = req

    try {
        if (!user)
            throw new Error('El usuario no está autenticado')

        user.tokens = user.tokens.filter(token => token.token !== currentToken)

        await user.save()

        const { response } = successResponse({
            data: null,
            message: 'Cierre de sesión exitoso'
        })
        res.json(response);
    } catch (error) {
        handleUnknownError({ error, res, statusCode: 401 })
    }
}