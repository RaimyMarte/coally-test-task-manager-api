import { Request, Response } from 'express';
import Task from "../../models/task";
import { handleUnknownError, successResponse } from "../../response";

interface UpdateTaskBody {
    title: string;
    description: string;
    completed: boolean;
}


export const updateTask = async (req: Request, res: Response): Promise<void> => {
    const userId = req?.user?._id
    const taskId = req.params.id

    const body: UpdateTaskBody = req.body

    const updateValues = Object.keys(body)
    const allowedUpdates = ['title', 'description', 'completed']

    try {
        const isValidOperation = updateValues.every(key => allowedUpdates.includes(key))

        if (!isValidOperation)
            throw new Error('Edición inválida')

        const task = await Task.findOne({ _id: taskId, owner: userId })

        if (!task)
            throw new Error('Esta tarea no existe')

        updateValues.forEach(key => (task as any)[key] = req.body[key])
        task.lastUpdatedAt = new Date();

        await task.save()

        const { response } = successResponse({ data: task, message: 'Tarea actualizada con éxito' })
        res.json(response);
    } catch (error) {
        handleUnknownError({ error, res, })
    }
}
