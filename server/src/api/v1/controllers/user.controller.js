const { SuccessResponse } = require("../core/success.response")
const UserService = require("../services/user.service")

class UserController {
    newUser = async (req, res, next) => {
        new SuccessResponse({
            message: "Verify email user success!",
            metadata: await UserService.newUser({
                email: req.body.email
            })
        }).send(res)
    }

    checkRegisterEmailToken = async (req, res, next) => {
        new SuccessResponse({
            message: "Login user success!",
            metadata: await UserService.checkLoginEmailToken({
                ...req.query
            })
        }).send(res)
    }
}

module.exports = new UserController()