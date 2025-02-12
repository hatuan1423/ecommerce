const { SuccessResponse } = require("../core/success.response")

const profiles = [
    {
        user_id: 1,
        user_name: 'dhtuan'
    },
    {
        user_id: 2,
        user_name: 'cun'
    }
]

class ProfileController {
    //admin
    profiles = async (req, res, next) => {
        new SuccessResponse({
            message: "Get profiles success!",
            metadata: profiles
        }).send(res)
    }
    //shop
    profile = async (req, res, next) => {
        new SuccessResponse({
            message: "Get profile success!",
            metadata: profiles[0]
        }).send(res)
    }
}

module.exports = new ProfileController