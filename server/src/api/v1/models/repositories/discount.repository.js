'use strict'

const discount = require("../discount.model")
const { convertToObjectIdMongoDB, unGetSelectData, getSelectData } = require("../../utils/index")

const findDiscount = async ({ filter }) => {
    return await discount.findOne(filter).lean()
}

const updateDiscount = async ({ query, bodyUpdate, isNew = true }) => {
    return await discount.findByIdAndUpdate(query, bodyUpdate, {
        new: isNew
    })
}

const findAllDiscountCodesUnSelect = async ({
    limit = 50, page = 1, sort = 'ctime', filter, unSelect
}) => {
    const skip = (page - 1) * limit
    const sortBy = sort === 'ctime' ? { _id: -1 } : { _id: 1 }
    const discounts = await discount.find(filter)
        .sort(sortBy)
        .skip(skip)
        .limit(limit)
        .select(unGetSelectData(unSelect))
        .lean()
    return discounts
}

const findAllDiscountCodesSelect = async ({
    limit = 50, page = 1, sort = 'ctime', filter, select
}) => {
    const skip = (page - 1) * limit
    const sortBy = sort === 'ctime' ? { _id: -1 } : { _id: 1 }
    const discounts = await discount.find(filter)
        .sort(sortBy)
        .skip(skip)
        .limit(limit)
        .select(getSelectData(select))
        .lean()
    return discounts
}

module.exports = {
    updateDiscount,
    findDiscount,
    findAllDiscountCodesUnSelect,
    findAllDiscountCodesSelect
}