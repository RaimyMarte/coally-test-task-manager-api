const express = require('express')
const auth = require('../middleware/auth')
const createTask = require('../controllers/task/createTask')
const { getUserTasks, getTaskById } = require('../controllers/task/getTasks')
const updateTask = require('../controllers/task/updateTask')
const deleteTask = require('../controllers/task/deleteTask')

const router = new express.Router()


router.post('/', auth, createTask)

router.get('/', auth, getUserTasks)
router.get('/:id', auth, getTaskById)

router.patch('/:id', auth, updateTask)
router.delete('/:id', auth, deleteTask)

module.exports = router

