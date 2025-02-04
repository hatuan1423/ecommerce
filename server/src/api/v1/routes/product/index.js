'use strict'

const express = require('express')
const router = express.Router()
const asyncHandler = require("../../helpers/asyncHandler")
const { authentication } = require('../../auth/authUtils')
const productController = require('../../controllers/product.controller')

router.get('/search/:keySearch', asyncHandler(productController.getListSearchProductByUser))
router.get('', asyncHandler(productController.getAllProducts))
router.get('/:product_id', asyncHandler(productController.getDetailProduct))

router.use(authentication)

router.post('', asyncHandler(productController.createProduct))
router.patch('/:product_id', asyncHandler(productController.updateProduct))
router.post('/publish/:id', asyncHandler(productController.publishProductByShop))
router.post('/unpublish/:id', asyncHandler(productController.unPublishProductByShop))
router.get('/drafts/all', asyncHandler(productController.getAllDraftsForShop))
router.get('/published/all', asyncHandler(productController.getAllPublishForShop))

module.exports = router