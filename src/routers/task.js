const express = require('express')
const auth = require('../middleware/auth')
const createTask = require('../controllers/task/createTask')
const { getUserTasks, getTaskById } = require('../controllers/task/getTasks')
const updateTask = require('../controllers/task/updateTask')
const deleteTask = require('../controllers/task/deleteTask')

const router = new express.Router()


router.post('/tasks', auth, createTask)

router.get('/tasks', auth, getUserTasks)
router.get('/tasks/:id', auth, getTaskById)

router.patch('/tasks/:id', auth, updateTask)
router.delete('/tasks/:id', auth, deleteTask)

module.exports = router

