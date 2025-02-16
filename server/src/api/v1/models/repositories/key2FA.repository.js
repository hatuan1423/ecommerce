const key2FA = require("../key2FA.model")

const foundSecretKeyById = async (shop_id) => {
    return await key2FA.findOne({ shop_id }).lean()
}

module.exports = {
    foundSecretKeyById
}