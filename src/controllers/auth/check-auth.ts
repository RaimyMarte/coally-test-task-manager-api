import { Request, Response } from 'express';
import { handleUnknownError, successResponse } from "../../response";

export const checkAuth = async (req: Request, res: Response): Promise<void> => {
    try {
        const { response } = successResponse({
            data: {
                user: req.user,
                token: req.token
            },
        })
        res.json(response);
    } catch (error) {
        handleUnknownError({ error, res, })
    }
}