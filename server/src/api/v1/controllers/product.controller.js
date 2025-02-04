'use strict'


const { SuccessResponse } = require("../core/success.response")
const ProductService = require("../services/product.service")

class ProductController {
    createProduct = async (req, res, next) => {
        new SuccessResponse({
            message: "Create product success!",
            metadata: await ProductService.createProduct(req.body.product_type, {
                ...req.body,
                product_shop: req.user.userId
            })
        }).send(res)
    }

    getAllDraftsForShop = async (req, res, next) => {
        new SuccessResponse({
            message: "Get list product draft success!",
            metadata: await ProductService.findAllDraftsForShop({
                product_shop: req.user.userId
            })
        }).send(res)
    }

    getAllPublishForShop = async (req, res, next) => {
        new SuccessResponse({
            message: "Get list product publish success!",
            metadata: await ProductService.findAllPublishForShop({
                product_shop: req.user.userId
            })
        }).send(res)
    }

    publishProductByShop = async (req, res, next) => {
        new SuccessResponse({
            message: "Publish product success!",
            metadata: await ProductService.publishProductByShop({
                product_shop: req.user.userId,
                product_id: req.params.id
            })
        }).send(res)
    }

    unPublishProductByShop = async (req, res, next) => {
        new SuccessResponse({
            message: "Un publish product success!",
            metadata: await ProductService.unPublishProductByShop({
                product_shop: req.user.userId,
                product_id: req.params.id
            })
        }).send(res)
    }

    getListSearchProductByUser = async (req, res, next) => {
        new SuccessResponse({
            message: "Search product success!",
            metadata: await ProductService.searchProduct(req.params)
        }).send(res)
    }

    getAllProducts = async (req, res, next) => {
        new SuccessResponse({
            message: "Get all products success!",
            metadata: await ProductService.findAllProducts(req.query)
        }).send(res)
    }

    getDetailProduct = async (req, res, next) => {
        new SuccessResponse({
            message: "Get detail product success!",
            metadata: await ProductService.findProduct({
                product_id: req.params.product_id
            })
        }).send(res)
    }

    updateProduct = async (req, res, next) => {
        new SuccessResponse({
            message: "Update product success!",
            metadata: await ProductService.updateProduct(req.body.product_type, req.params.product_id, {
                ...req.body,
                product_shop: req.user.userId
            })
        }).send(res)
    }
}

module.exports = new ProductController