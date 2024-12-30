import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import { handleUnknownError } from '../response';
dotenv.config()

const secretJWTKey = process.env.SECRET_JWT_KEY || '';

const auth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            throw new Error('Token no enviado');
        }

        const decoded = jwt.verify(token, secretJWTKey) as { _id: string };
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!user) {
            throw new Error('El usuario no ha sido encontrado');
        }

        req.token = token;
        req.user = user;

        next();
    } catch (error: any) {
        handleUnknownError({ error, res, statusCode: 401 })
    }
};

export default auth;
