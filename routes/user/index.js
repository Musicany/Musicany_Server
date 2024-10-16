const express = require('express');
const router = express.Router();

const { validateToken } = require('../../middlewares/AuthMiddleware.js');

const SignUp = require('./signUp.js');
router.post('/signup', SignUp);

module.exports = router;