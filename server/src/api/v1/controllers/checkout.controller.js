const { CREATED, SuccessResponse } = require("../core/success.response")
const CheckoutService = require("../services/checkout.service")

class CheckoutController {
    checkoutReview = async (req, res, next) => {
        new CREATED({
            message: "Create new checkout success!",
            metadata: await CheckoutService.checkoutReview(req.body)
        }).send(res)
    }
}

module.exports = new CheckoutController