const express = require('express');
const router = express.Router();

const userRouter = require('./user');
router.use('/auth', userRouter);

module.exports = router;