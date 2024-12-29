const express = require("express");
const auth = require('../middleware/auth');
const login = require("../controllers/auth/login");
const logout = require("../controllers/auth/logout");
const signUp = require("../controllers/auth/signUp");
const checkAuth = require("../controllers/auth/check-auth");

const router = new express.Router()

router.get('/check-auth', auth, checkAuth)
router.post('/sign-up', signUp)
router.post('/login', login)
router.post('/logout', auth, logout)

module.exports = router