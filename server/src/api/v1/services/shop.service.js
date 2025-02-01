'use strict'

const { findByEmail } = require("../models/repositories/shop.repository")

class ShopService {
    static getDetail = async (id) => {
        return await findByEmail({ id })
    }
}

module.exports = ShopService