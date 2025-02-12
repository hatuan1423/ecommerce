const user = require("../models/user.model")
const { BadRequestError } = require("../core/error.response")
const EmailService = require("./email.service")

class UserService {
    static async newUser({ email = null }) {
        const foundUser = await user.findOne({ user_email: email }).lean()
        if (foundUser) throw new BadRequestError("User already existed!")
        const result = await EmailService.sendEmailToken({
            email
        })
        return result
    }
}

module.exports = UserService