'use strict'

const { clothing, product } = require("../models/product.model")
const { BadRequestError } = require("../core/error.response")
const { findAllDraftsForShop, publishProductByShop, findAllPublishForShop, searchProductByUser, findAllProducts, findProduct, updateProductById, deleteProduct } = require("../models/repositories/product.repository")
const { removeUndefinedObject, updateNestedObjectParser } = require("../utils")

class ProductFactory {
    static productRegistry = {}

    static registerProductType(type, classRef) {
        ProductFactory.productRegistry[type] = classRef
    }

    static async createProduct(type, payload) {
        const productClass = ProductFactory.productRegistry[type]
        if (!productClass) throw new BadRequestError("Invalid product type!")
        return new productClass(payload).createProduct()
    }

    static async updateProduct(type, product_id, payload) {
        const productClass = ProductFactory.productRegistry[type]
        if (!productClass) {
            throw new BadRequestError('Invalid product types')
        }
        return new productClass(payload).updateProduct(product_id)
    }

    static async findAllDraftsForShop({ product_shop, limit = 50, skip = 0 }) {
        const query = { product_shop, isDraft: true }
        return await findAllDraftsForShop({ query, limit, skip })
    }

    static async findAllPublishForShop({ product_shop, limit = 50, skip = 0 }) {
        const query = { product_shop, isPublished: true }
        return await findAllPublishForShop({ query, limit, skip })
    }

    static async publishProductByShop({ product_shop, product_id }) {
        return await publishProductByShop({ product_shop, product_id })
    }

    static async unPublishProductByShop({ product_shop, product_id }) {
        return await unPublishProductByShop({ product_shop, product_id })
    }

    static async searchProduct({ keySearch }) {
        return await searchProductByUser({ keySearch })
    }

    static async findAllProducts({ limit = 50, sort = 'ctime', page = 1, filter = { isPublished: true } }) {
        return await findAllProducts({ limit, sort, page, filter, select: ['product_name', 'product_price', 'product_thumb'] })
    }

    static async findProduct({ product_id }) {
        return await findProduct({ product_id, unSelect: ['__v'] })
    }

    static async deleteProduct({ product_id }) {
        return await deleteProduct({ product_id })
    }
}


class Product {
    constructor({
        product_name,
        product_thumb,
        product_description,
        product_price,
        product_quantity,
        product_type,
        product_shop,
        product_attributes,
    }) {
        this.product_name = product_name
        this.product_thumb = product_thumb
        this.product_description = product_description
        this.product_price = product_price
        this.product_quantity = product_quantity
        this.product_type = product_type
        this.product_shop = product_shop
        this.product_attributes = product_attributes
    }

    async createProduct(product_id) {
        return await product.create({ ...this, _id: product_id })
    }

    async updateProduct(product_id, bodyUpdate) {
        return updateProductById({ product_id, bodyUpdate, model: product })
    }
}

class Clothing extends Product {
    async createProduct() {
        const newClothing = await clothing.create({
            ...this.product_attributes,
            product_shop: this.product_shop
        })
        if (!newClothing) throw new BadRequestError("Create new clothing err!")
        const newProduct = await super.createProduct(newClothing._id)
        if (!newProduct) throw new BadRequestError("Create new product err!")
        return newProduct
    }

    async updateProduct(product_id) {
        const objectParams = removeUndefinedObject(this)
        if (objectParams.product_attributes) {
            await updateProductById({
                product_id,
                bodyUpdate: updateNestedObjectParser(objectParams.product_attributes),
                model: clothing
            })
        }
        const updateProduct = await super.updateProduct(product_id, updateNestedObjectParser(objectParams))
        return updateProduct
    }
}

ProductFactory.registerProductType('Clothing', Clothing)

module.exports = ProductFactory
