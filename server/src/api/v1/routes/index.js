const express = require('express')
const { apiKey, permission } = require('../auth/checkAuth')
const router = express.Router()

router.use(apiKey)
router.use(permission('0000'))

router.use('/v1/api/discount', require("./discount"))
router.use('/v1/api/rbac', require("./rbac"))
router.use('/v1/api/email', require("./email"))
router.use('/v1/api/user', require("./user"))
router.use('/v1/api/product', require("./product"))
router.use('/v1/api/profile', require("./profile"))
router.use('/v1/api/upload', require("./upload"))
router.use('/v1/api/2fa', require("./2fa"))
router.use('/v1/api/checkout', require("./checkout"))
router.use('/v1/api/cart', require("./cart"))
router.use('/v1/api', require("./access"))
router.use('/v1/api/shop', require("./shop"))

module.exports = router