import { Request, Response } from 'express';
import Task from "../../models/task";
import { handleUnknownError, successResponse } from "../../response";

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
    const userId = req?.user?._id;
    const taskId = req.params.id;

    try {
        const task = await Task.findOne({ _id: taskId, owner: userId });

        if (!task)
            throw new Error('Esta tarea no existe')

        await task.deleteOne();

        const { response } = successResponse({ data: null, message: 'Tarea eliminada con éxito' });
        res.json(response);
    } catch (error) {
        handleUnknownError({ error, res, })
    }
}
