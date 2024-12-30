import { Request, Response } from 'express';
import { handleUnknownError, successResponse } from "../../response";

export const checkAuth = async (req: Request, res: Response): Promise<void> => {
    try {
        const filteredUser = req?.user?.toObject();
        filteredUser.password = undefined;
        filteredUser.tokens = undefined;

        const { response } = successResponse({
            data: {
                user: filteredUser,
                token: req.token
            },
        })
        res.json(response);
    } catch (error) {
        handleUnknownError({ error, res, })
    }
}