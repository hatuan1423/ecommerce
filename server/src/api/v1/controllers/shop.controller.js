'use strict'


const { SuccessResponse } = require("../core/success.response")
const ShopService = require("../services/shop.service")

class ShopController {
    getDetail = async (req, res, next) => {
        new SuccessResponse({
            message: "Get detail OK!",
            metadata: await ShopService.getDetail(req.params.id)
        }).send(res)
    }
}

module.exports = new ShopController