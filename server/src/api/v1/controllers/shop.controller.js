const { SuccessResponse } = require("../core/success.response")
const ShopService = require("../services/shop.service")

class ShopController {
    getDetail = async (req, res, next) => {
        new SuccessResponse({
            message: "Get detail shop success!",
            metadata: await ShopService.findShop({
                shop_id: req.params.shop_id,
                device_id: req.headers['user-agent']
            })
        }).send(res)
    }
}

module.exports = new ShopController