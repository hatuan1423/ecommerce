'use strict'

const { findShopById } = require("../models/repositories/shop.repository")

class ShopService {
    static findShop = async ({ shop_id }) => {
        return await findShopById({ shop_id, unSelect: ['__v', 'updatedAt', 'password'] })
    }
}

module.exports = ShopService