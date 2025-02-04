'use strict'


const { SuccessResponse } = require("../core/success.response")
const ShopService = require("../services/shop.service")

class ShopController {
    getDetail = async (req, res, next) => {
        new SuccessResponse({
            message: "Get detail shop success!",
            metadata: await ShopService.findShop({ shop_id: req.params.shop_id })
        }).send(res)
    }
}

module.exports = new ShopController