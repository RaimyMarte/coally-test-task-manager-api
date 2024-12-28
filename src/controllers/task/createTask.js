const Task = require("../../models/task");
const errorResponse = require("../../response/errorResponse");
const successResponse = require("../../response/successResponse");

const createTask = async (req, res) => {
    const userId = req.user._id

    const task = new Task({
        ...req.body,
        owner: userId
    })

    try {
        if (!task.title)
            throw new Error('El título es requerido')

        await task.save()

        const { response } = successResponse({ data: task, message: 'Tarea creada con éxito' })
        res.json(response);
    } catch (error) {
        const { response } = errorResponse({ message: error.message, statusCode: res.statusCode })
        res.json(response);
    }
}

module.exports = createTask