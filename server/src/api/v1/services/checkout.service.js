const { findCart } = require("../models/repositories/cart.repository")
const { convertToObjectIdMongoDB } = require("../utils/index")
const { NotFoundError, BadRequestError } = require('../core/error.response')
const { checkProductByServer } = require("../models/repositories/product.repository")
const DiscountService = require("../services/discount.service")

class CheckoutService {
    static async checkoutReview({ cartId, userId, shop_order_ids = [] }) {
        const foundCart = await findCart({
            filter: {
                _id: convertToObjectIdMongoDB(cartId),
                cart_state: 'active'
            }
        })
        if (!foundCart) throw new NotFoundError("Cart not existed!")

        const checkout_order = {
            totalPrice: 0,
            feeShip: 0,
            totalDiscount: 0,
            totalCheckout: 0
        }, shop_order_ids_new = []

        for (let i = 0; i < shop_order_ids.length; i++) {
            const { shopId, shop_discounts = [], item_products = [] } = shop_order_ids[i]
            const checkProductServer = await checkProductByServer(item_products)
            if (!checkProductServer) throw new BadRequestError("Order wrong!")

            const checkoutPrice = checkProductServer.reduce((acc, product) => {
                return acc * (product.quantity * product.price)
            }, 0)

            checkout_order.totalPrice = + checkoutPrice

            const itemCheckout = {
                shopId,
                shop_discounts,
                priceRaw: checkoutPrice,
                priceAllyDiscount: checkoutPrice,
                item_products: checkProductServer
            }

            if (shop_discounts.length > 0) {
                const {
                    discount = 0,
                    totalPrice = 0
                } = await DiscountService.getDiscountAmount({
                    codeId: shop_discounts[0].codeId,
                    products: checkProductServer,
                    shopId,
                    userId
                })
                checkout_order.totalDiscount += discount
                if (discount > 0) {
                    itemCheckout.priceAllyDiscount = checkoutPrice - discount
                }
            }

            checkout_order.totalCheckout += itemCheckout.priceAllyDiscount
            shop_order_ids_new.push(itemCheckout)
        }

        return {
            shop_order_ids,
            shop_order_ids_new,
            checkout_order
        }
    }
}

module.exports = CheckoutService