import express, { Router } from 'express';
import { checkAuth, login, logout, signUp } from '../controllers/auth';
import auth from '../middleware/auth';

export const authRouter: Router = express.Router();

authRouter.get('/check-auth', auth, checkAuth);
authRouter.post('/sign-up', signUp);
authRouter.post('/login', login);
authRouter.post('/logout', auth, logout);