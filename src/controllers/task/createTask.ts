import { Request, Response } from 'express';
import Task from "../../models/task";
import { handleUnknownError, successResponse } from "../../response";

export const createTask = async (req: Request, res: Response): Promise<void> => {
    const userId = req?.user?._id

    try {
        const task = new Task({
            ...req.body,
            owner: userId
        })

        if (!task.title)
            throw new Error('El título es requerido')

        await task.save()

        const { response } = successResponse({ data: task, message: 'Tarea creada con éxito' })
        res.json(response);
    } catch (error) {
        handleUnknownError({ error, res, })
    }
}