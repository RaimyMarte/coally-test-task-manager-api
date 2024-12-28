const Task = require("../../models/task");
const errorResponse = require("../../response/errorResponse");
const successResponse = require("../../response/successResponse");

const deleteTask = async (req, res) => {
    const userId = req.user._id;
    const taskId = req.params.id;

    try {
        const task = await Task.findOne({ _id: taskId, owner: userId });

        if (!task)
            throw new Error('Esta tarea no existe')

        await task.remove();

        const { response } = successResponse({ data: null, message: 'Tarea eliminada con éxito' });
        res.status(200).json(response);
    } catch (error) {
        const { response } = errorResponse({ message: error.message, statusCode: 400 });
        res.status(400).json(response);
    }
};

module.exports = deleteTask;
