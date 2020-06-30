const express = require('express');
const router = express.Router();

// import controller
const { signup , accountActivation, signin } = require('../controllers/auth');

// import validators

const { userSignipValidator , userSigninValidator } = require('../validators/auth');
const { runValidation } = require('../validators');

router.post('/signup', userSignipValidator, runValidation, signup);
router.post('/account-activation', accountActivation);
router.post('/signin', userSigninValidator, runValidation, signin);
module.exports = router;