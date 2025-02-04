'use strict'

const shopModel = require("../shop.model")
const { convertToObjectIdMongoDB, unGetSelectData } = require("../../utils/index")

const findByEmail = async ({ email, select = {
    email: 1, password: 1, name: 1, status: 1, roles: 1
} }) => {
    return await shopModel.findOne({ email }).select(select).lean()
}

const findShopById = async ({ shop_id, unSelect }) => {
    return await shopModel.findById({ _id: convertToObjectIdMongoDB(shop_id) }).select(unGetSelectData(unSelect))
}

module.exports = {
    findByEmail,
    findShopById,
}