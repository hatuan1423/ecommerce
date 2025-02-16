const { BadRequestError, NotFoundError } = require("../core/error.response")
const { findCart, createUserCart, updateUserCartQuantity } = require("../models/repositories/cart.repository")
const cart = require("../models/cart.model")
const { getProductById } = require("../models/repositories/product.repository")

class CartService {
    static async addToCart({
        userId, product = {}
    }) {
        const foundCart = await findCart({
            filter: {
                cart_userId: userId
            }
        })
        if (!foundCart) {
            return await createUserCart({ userId, product })
        }
        if (!foundCart.cart_products.length) {
            foundCart.cart_products = [product]
            return await foundCart.save()
        }
        return await updateUserCartQuantity({ userId, product })
    }

    static async addToCartV2({ userId, shop_order_ids }) {
        const { productId, quantity, old_quantity } = shop_order_ids[0]?.item_products[0]
        const foundProduct = await getProductById(productId)
        if (!foundProduct) throw new NotFoundError("Product not existed!")
        if (foundProduct.product_shop.toString() !== shop_order_ids[0].shopId) throw new NotFoundError("Shop not existed!")
        if (quantity === 0) {
            //delete
        }
        return await updateUserCartQuantity({
            userId,
            product: {
                productId,
                quantity: quantity - old_quantity
            }
        })
    }

    static async deleteUserCart({ userId, productId }) {
        const query = { cart_userId: userId, cart_state: 'active' },
            updateSet = {
                $pull: {
                    cart_products: {
                        productId
                    }
                }
            }
        return await cart.updateOne(query, updateSet)
    }

    static async getListUserCart({ userId }) {
        return await cart.findOne({
            cart_userId: +userId
        }).lean()
    }
}

module.exports = CartService