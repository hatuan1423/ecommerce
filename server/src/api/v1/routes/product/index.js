'use strict'

const express = require('express')
const router = express.Router()
const asyncHandler = require("../../helpers/asyncHandler")
const { authentication } = require('../../auth/authUtils')
const productController = require('../../controllers/product.controller')


router.use(authentication)
router.post('', asyncHandler(productController.createProduct))

module.exports = router