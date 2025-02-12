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

    checkRegisterEmailToken = async () => {

    }
}

module.exports = new UserController()