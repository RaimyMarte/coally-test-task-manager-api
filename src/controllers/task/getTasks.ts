import { Request, Response } from 'express';
import Task from "../../models/task";
import { handleUnknownError, successResponse } from "../../response";

interface TaskFilter {
    owner: string;
    completed?: boolean;
}

export const getUserTasks = async (req: Request, res: Response): Promise<void> => {
    const userId = req?.user?._id
    const { completed } = req.query

    try {
        const filter: TaskFilter = { owner: userId };

        if (completed === 'true' || completed === 'false') {
            filter.completed = completed === 'true';
        }

        const tasks = await Task.find(filter)
            .sort({ completed: 1, createdAt: -1 });

        const { response } = successResponse({ data: tasks })
        res.json(response);
    } catch (error) {
        handleUnknownError({ error, res, })
    }
}

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
    const userId = req?.user?._id
    const taskId = req.params.id

    try {
        const task = await Task.findOne({ _id: taskId, owner: userId })

        const { response } = successResponse({ data: task })
        res.json(response);
    } catch (error) {
        handleUnknownError({ error, res, })
    }
}