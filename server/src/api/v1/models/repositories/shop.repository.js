'use strict'

const shop = require("../shop.model")
const { convertToObjectIdMongoDB, unGetSelectData } = require("../../utils/index")

const findByEmail = async ({ email, select = {
    email: 1, password: 1, name: 1, status: 1, roles: 1
} }) => {
    return await shop.findOne({ email }).select(select).lean()
}

const findShopById = async ({ shop_id, unSelect }) => {
    return await shop.findById({ _id: convertToObjectIdMongoDB(shop_id) }).select(unGetSelectData(unSelect)).lean()
}

const updateShop = async ({ query, update, options }) => {
    return await shop.findByIdAndUpdate(query, update, options)
}

module.exports = {
    findByEmail,
    findShopById,
    updateShop
}