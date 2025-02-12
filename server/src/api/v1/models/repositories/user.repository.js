const userModel = require("../user.model")

const createUser = async ({
    user_id,
    user_name,
    user_slug,
    user_password,
    user_email,
    user_role
}) => {
    const newUser = await userModel.create({
        user_id,
        user_name,
        user_slug,
        user_email,
        user_password,
        user_role
    })
    return newUser
}

module.exports = {
    createUser
}