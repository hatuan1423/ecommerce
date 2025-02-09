'use strict'

const { CREATED, SuccessResponse } = require("../core/success.response")
const ms = require("ms")
const DiscountService = require("../services/discount.service")

class DiscountController {
    createDiscountCode = async (req, res, next) => {
        new CREATED({
            message: "Create discount success!",
            metadata: await DiscountService.createDiscountCode({
                ...req.body,
                shopId: req.user.userId
            })
        }).send(res)
    }
    getAllDiscountCodes = async (req, res, next) => {
        new CREATED({
            message: "Get all discounts code success!",
            metadata: await DiscountService.getAllDiscountCodesByShop({
                ...req.query,
                shopId: req.user.userId
            })
        }).send(res)
    }
    getDiscountAmount = async (req, res, next) => {
        new CREATED({
            message: "Get discount amount success!",
            metadata: await DiscountService.getDiscountAmount({
                ...req.body,
            })
        }).send(res)
    }
    getAllDiscountCodesWithProduct = async (req, res, next) => {
        new CREATED({
            message: "Get all discounts code with products success!",
            metadata: await DiscountService.getAllDiscountCodesWithProduct({
                ...req.query
            })
        }).send(res)
    }
    cancelDiscount = async (req, res, next) => {
        new CREATED({
            message: "Cancel discount success!",
            metadata: await DiscountService.cancelDiscountCode({
                ...req.body
            })
        }).send(res)
    }
}

module.exports = new DiscountController