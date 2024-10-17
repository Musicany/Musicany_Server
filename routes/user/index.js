const express = require('express');
const router = express.Router();

const { validateToken } = require('../../middlewares/AuthMiddleware.js');

const SignUp = require('./signUp.js');
router.post('/signup', SignUp);

const SignIn = require('./signIn.js');
router.post('/signin', SignIn)

module.exports = router;