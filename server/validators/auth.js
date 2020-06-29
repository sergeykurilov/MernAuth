const { check } = require('express-validator');


exports.userSignipValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is reqiured'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({min: 6})
        .withMessage('Password must be at least 6 characters long'),
];