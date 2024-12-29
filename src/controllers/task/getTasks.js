
const Task = require("../../models/task");
const errorResponse = require("../../response/errorResponse");
const successResponse = require("../../response/successResponse");

const getUserTasks = async (req, res) => {
    const userId = req.user._id
    const { completed } = req.query

    try {
        const filter = { owner: userId };

        if (completed === 'true' || completed === 'false') {
            filter.completed = completed === 'true';
        }

        const tasks = await Task.find(filter).sort({ createdAt: -1 });

        const { response } = successResponse({ data: tasks })
        res.json(response);
    } catch (error) {
        const { response } = errorResponse({ message: error.message, statusCode: res.statusCode })
        res.json(response);
    }
}

const getTaskById = async (req, res) => {
    const userId = req.user._id
    const taskId = req.params.id

    try {
        const task = await Task.findOne({ _id: taskId, owner: userId })

        const { response } = successResponse({ data: task })
        res.json(response);
    } catch (error) {
        const { response } = errorResponse({ message: error.message, statusCode: res.statusCode })
        res.json(response);
    }
}


module.exports = { getUserTasks, getTaskById }