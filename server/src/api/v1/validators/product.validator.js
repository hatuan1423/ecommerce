const { check, validationResult } = require("express-validator")
const { ValidationError } = require("../core/error.response");

const validateSignup = [
    check('firstName')
        .trim()
        .escape()
        .notEmpty()
        .withMessage("First name is required!")
        .isString()
        .withMessage("First name must be a string value!")
        .isLength({ min: 3, max: 50 })
        .withMessage("First name must be between 3 and 50 characters long!"),

    check('lastName')
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Last name is required!")
        .isString()
        .withMessage("Last name must be a string value!")
        .isLength({ min: 3, max: 50 })
        .withMessage("Last name must be between 3 and 50 characters long!"),

    check('dateOfBirth')
        .notEmpty()
        .withMessage("Date of birth is required!"),

    check('gender')
        .notEmpty()
        .withMessage("Gender is required!")
        .isIn(['male', 'female'])
        .withMessage("Gender must be either 'male' or 'female'!"),

    check('email')
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Email is required!")
        .isEmail()
        .withMessage("Invalid email format!"),

    check('password')
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Password is required!")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long!"),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) throw new ValidationError(errors.array());
        next();
    }
]

const validateLogin = [
    check('email')
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Email is required!")
        .isEmail()
        .withMessage("Invalid email format!"),

    check('password')
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Password is required!"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) throw new ValidationError(errors.array());
        next();
    }
];

const accessValidator = {
    validateSignup,
    validateLogin
}

module.exports = accessValidator 