import { NextFunction, Request, Response } from 'express';
import { errorResponse } from '../response/errorResponse';
import dotenv from 'dotenv';
dotenv.config()

const apiKey = process.env.API_KEY || '';

export const validateAPIKey = (req: Request, res: Response, next: NextFunction): void => {
    const headerAPIKey = req.headers.apikey as string | undefined;

    if (headerAPIKey === apiKey) {
        next();
    } else {
        const { response } = errorResponse({
            message: 'API Key inválida',
            statusCode: 403
        });
        res.json(response);
    }
};