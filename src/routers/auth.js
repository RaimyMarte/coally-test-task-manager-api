const express = require("express");
const auth = require('../middleware/auth');
const login = require("../controllers/auth/login");
const logout = require("../controllers/auth/logout");
const register = require("../controllers/auth/register");

const router = new express.Router()

router.post('/users/register', register)
router.post('/users/login', login)
router.post('/users/logout', auth, logout)

module.exports = router