const { check, validationResult } = require("express-validator")
const { ValidationError } = require("../core/error.response");

const validateSignup = [
    check('name')
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Name is required!")
        .isString()
        .withMessage("Name must be a string value!")
        .isLength({ min: 3 })
        .withMessage("Name must be at least 3 characters long!"),
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
        if (!errors.isEmpty()) {
            throw new ValidationError(errors.array());
        }
        next();
    }
]

const accessValidator = {
    validateSignup
}

module.exports = accessValidator 