'use strict'

const express = require('express')
const router = express.Router()
const asyncHandler = require("../../helpers/asyncHandler")
const { authentication } = require('../../auth/authUtils')
const shopController = require('../../controllers/shop.controller')

router.use(authentication)
router.get('/shop', asyncHandler(shopController.getDetail))

module.exports = router