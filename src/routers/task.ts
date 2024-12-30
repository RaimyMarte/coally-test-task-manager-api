import express, { Router } from 'express';
import auth from '../middleware/auth';
import { getUserTasks, getTaskById, updateTask, createTask, deleteTask } from '../controllers/task';

export const tasksRouter: Router = express.Router();

tasksRouter.post('/', auth, createTask);

tasksRouter.get('/', auth, getUserTasks);
tasksRouter.get('/:id', auth, getTaskById);

tasksRouter.patch('/:id', auth, updateTask);
tasksRouter.delete('/:id', auth, deleteTask);