'use strict'

const { getSelectData, unGetSelectData } = require("../../utils")
const historyProductModel = require("../historyProduct.model")
const { product, clothing } = require("../product.model")
const { Types } = require('mongoose')

const findAllDraftsForShop = async ({ query, limit, skip }) => {
    return await queryProduct({ query, limit, skip })
}

const findAllPublishForShop = async ({ query, limit, skip }) => {
    return await queryProduct({ query, limit, skip })
}

const queryProduct = async ({ query, limit, skip }) => {
    return await product.find(query)
        .populate('product_shop', 'name email -_id')
        .sort({ updateAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean()
        .exec()
}

const publishProductByShop = async ({ product_shop, product_id }) => {
    const foundProduct = await product.findOne({
        product_shop: new Types.ObjectId(product_shop),
        _id: new Types.ObjectId(product_id)
    })
    if (!foundProduct) return null
    foundProduct.isDraft = false
    foundProduct.isPublished = true
    const { modifiedCount } = await foundProduct.updateOne(foundProduct)
    return modifiedCount
}

const unPublishProductByShop = async ({ product_shop, product_id }) => {
    const foundProduct = await product.findOne({
        product_shop: new Types.ObjectId(product_shop),
        _id: new Types.ObjectId(product_id)
    })
    if (!foundProduct) return null
    foundProduct.isDraft = true
    foundProduct.isPublished = false
    const { modifiedCount } = await foundProduct.updateOne(foundProduct)
    return modifiedCount
}

const searchProductByUser = async ({ keySearch }) => {
    const regexSearch = new RegExp(keySearch)
    const results = await product.find({
        isPublished: true,
        $text: { $search: regexSearch }
    }, { score: { $meta: 'textScore' } })
        .sort({ score: { $meta: 'textScore' } }).lean()
    return results
}

const findAllProducts = async ({ limit, sort, page, filter, select }) => {
    const skip = (page - 1) * limit
    const sortBy = sort === 'ctime' ? { _id: -1 } : { _id: 1 }
    const products = await product.find(filter)
        .sort(sortBy)
        .skip(skip)
        .limit(limit)
        .select(getSelectData(select))
        .lean()
    return products
}

const findProduct = async ({ product_id, unSelect }) => {
    return await product.findById(product_id).select(unGetSelectData(unSelect))
}

const updateProductById = async ({ product_id, bodyUpdate, model, isNew = true }) => {
    return await model.findByIdAndUpdate(product_id, bodyUpdate, {
        new: isNew
    })
}

const deleteProduct = async ({ product_id }) => {
}


module.exports = {
    findProduct,
    deleteProduct,
    findAllProducts,
    updateProductById,
    searchProductByUser,
    findAllDraftsForShop,
    findAllPublishForShop,
    publishProductByShop,
    unPublishProductByShop
}

