'use strict'

const express = require('express')
const router = express.Router()
const asyncHandler = require("../../helpers/asyncHandler")
const { authentication } = require('../../auth/authUtils')
const cartController = require('../../controllers/cart.controller')

router.use(authentication)

router.post('', asyncHandler(cartController.addToCart))
router.post('/update', asyncHandler(cartController.updateCart))
router.get('', asyncHandler(cartController.getListUserCart))
router.delete('', asyncHandler(cartController.deleteUserCart))

module.exports = router