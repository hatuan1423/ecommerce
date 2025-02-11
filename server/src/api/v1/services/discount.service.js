'use strict'

const { findDiscount, findAllDiscountCodesUnSelect, updateDiscount } = require("../models/repositories/discount.repository")
const { BadRequestError, NotFoundError } = require("../core/error.response")
const { findAllProducts } = require("../models/repositories/product.repository")
const discount = require("../models/discount.model")
const { convertToObjectIdMongoDB, removeUndefinedObject } = require("../utils")

class DiscountService {
    static async createDiscountCode(payload) {
        const {
            code, start_date, end_date,
            shopId, is_active, product_ids, min_order_value,
            applies_to, name, description, type, max_value,
            max_uses, uses_count, max_uses_per_user, value, users_used
        } = payload

        const foundDiscount = await findDiscount({
            filter:
            {
                discount_code: code,
                discount_shopId: convertToObjectIdMongoDB(shopId)
            }
        })
        if (foundDiscount && foundDiscount.discount_is_active) throw new BadRequestError("Discount is existed!")
        const newDiscount = await discount.create({
            discount_name: name,
            discount_description: description,
            discount_type: type,
            discount_value: value,
            discount_code: code,
            discount_start_date: new Date(start_date),
            discount_end_date: new Date(end_date),
            discount_max_uses: max_uses,
            discount_uses_count: uses_count,
            discount_users_used: users_used,
            discount_max_uses_per_user: max_uses_per_user,
            discount_min_order_value: min_order_value || 0,
            discount_shopId: shopId,
            discount_is_active: is_active,
            discount_applies_to: applies_to,
            discount_product_ids: applies_to === 'all' ? [] : product_ids,
        })
        return newDiscount
    }

    static async getAllDiscountCodesWithProduct({
        code, shopId, userId, limit, page
    }) {
        const foundDiscount = await findDiscount({
            filter:
            {
                discount_code: code,
                discount_shopId: convertToObjectIdMongoDB(shopId)
            }
        })
        if (!foundDiscount || !foundDiscount.discount_is_active) throw new NotFoundError("Discount not existed!")
        const { discount_applies_to, discount_product_ids } = foundDiscount
        let products
        if (discount_applies_to === 'specific') {
            products = await findAllProducts({
                filter: {
                    _id: { $in: discount_product_ids },
                    isPublished: true
                },
                limit: +limit,
                page: +page,
                sort: 'ctime',
                select: ['product_name']
            })
        }
        if (discount_applies_to === 'all') {
            products = await findAllProducts({
                filter: {
                    product_shop: convertToObjectIdMongoDB(shopId),
                    isPublished: true
                },
                limit: +limit,
                page: +page,
                sort: 'ctime',
                select: ['product_name']
            })
        }
        return products
    }

    static async getAllDiscountCodesByShop({
        limit, page, shopId
    }) {
        const discounts = await findAllDiscountCodesUnSelect({
            limit: +limit,
            page: +page,
            filter: {
                discount_shopId: convertToObjectIdMongoDB(shopId),
                discount_is_active: true
            },
            unSelect: ['__v']
        })
        return discounts
    }

    static async getDiscountAmount({
        codeId, userId, shopId, products
    }) {
        const foundDiscount = await findDiscount({
            filter:
            {
                discount_code: codeId,
                discount_shopId: convertToObjectIdMongoDB(shopId)
            }
        })
        if (!foundDiscount) throw new NotFoundError("Discount not existed!")
        const { discount_type, discount_value, discount_is_active, discount_max_uses,
            discount_start_date, discount_end_date, discount_max_uses_per_user,
            discount_min_order_value, discount_users_used } = foundDiscount
        if (!discount_is_active) throw new NotFoundError("Discount is expired!")
        if (!discount_max_uses) throw new NotFoundError("Discount is out!")
        if (new Date() < new Date(discount_start_date) || new Date() > new Date(discount_end_date)) throw new NotFoundError("Discount is expired!")

        let totalOrder = 0
        if (discount_min_order_value > 0) {
            totalOrder = products.reduce((acc, product) => {
                return acc + (product.quantity * product.price)
            }, 0)
            if (totalOrder < discount_min_order_value) {
                throw new NotFoundError(`Discount require a minium order value of ${discount_min_order_value}`)
            }
        }

        if (discount_max_uses_per_user > 0) {
            const userUseDiscount = discount_users_used.find(user => user.userId === userId)
            if (userUseDiscount) {
                //...
            }
        }

        const amount = discount_type === 'fixed_amount' ? discount_value : totalOrder * (discount_value / 100)
        return {
            totalOrder,
            discount: amount,
            totalPrice: totalOrder - amount
        }
    }

    static async deleteDiscount({
        shopId,
        codeId
    }) {
    }

    static async cancelDiscountCode({ codeId, shopId, userId }) {
        const foundDiscount = await findDiscount({
            filter:
            {
                discount_code: code,
                discount_shopId: convertToObjectIdMongoDB(shopId)
            }
        })
        if (!foundDiscount) throw new NotFoundError("Discount not existed!")
        const result = await discount.findByIdAndUpdate(foundDiscount._id, {
            $pull: {
                discount_users_used: userId
            },
            $inc: {
                discount_max_uses: 1,
                discount_uses_count: -1
            }
        })
        return result
    }

    static async updateDiscount(discountId, bodyUpdate) {
        const foundDiscount = await findDiscount({
            filter: {
                _id: discountId
            }
        })
        if (!foundDiscount) throw new NotFoundError("Discount not existed!")
        const newBodyUpdate = removeUndefinedObject(bodyUpdate)
        return await updateDiscount({ query: { _id: discountId }, bodyUpdate: newBodyUpdate })
    }
}

module.exports = DiscountService