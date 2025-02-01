'use strict'

const shopModel = require("../shop.model")

const findByEmail = async ({ email, select = {
    email: 1, password: 1, name: 1, status: 1, roles: 1
} }) => {
    return await shopModel.findOne({ email }).select(select).lean()
}

const findById = async ({ id }) => {
    return await shopModel.findOne({ _id: id }).lean()
}

module.exports = {
    findByEmail,
    findById
}