const Task = require("../../models/task");
const errorResponse = require("../../response/errorResponse");
const successResponse = require("../../response/successResponse");

const updateTask = async (req, res) => {
    const userId = req.user._id
    const taskId = req.params.id

    const updateValues = Object.keys(req.body)
    const allowedUpdates = ['title', 'description', 'completed']

    try {
        const isValidOperation = updateValues.every(key => allowedUpdates.includes(key))

        if (!isValidOperation)
            throw new Error('Edición inválida')

        const task = await Task.findOne({ _id: taskId, owner: userId })

        if (!task)
            throw new Error('Esta tarea no existe')

        updateValues.forEach(key => task[key] = req.body[key])

        await task.save()

        const { response } = successResponse({ data: task, message: 'Tarea actualizada con éxito' })
        res.json(response);
    } catch (error) {
        const { response } = errorResponse({ message: error.message, statusCode: res.statusCode })
        res.json(response);
    }
}

module.exports = updateTask