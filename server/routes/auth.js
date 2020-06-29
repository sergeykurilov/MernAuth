const express = require('express');
const router = express.Router();

// import controller
const { signup } = require('../controllers/auth');

// import validators

const { userSignipValidator } = require('../validators/auth');
const { runValidation } = require('../validators');

router.post('/signup', userSignipValidator, runValidation, signup);

module.exports = router;