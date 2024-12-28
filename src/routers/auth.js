const express = require("express");
const auth = require('../middleware/auth');
const login = require("../controllers/auth/login");
const logout = require("../controllers/auth/logout");
const register = require("../controllers/auth/register");

const router = new express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', auth, logout)

module.exports = router