const express = require('express')
const TwoFactorController = require('../../controllers/2fa.controller')
const router = express.Router()
const asyncHandler = require("../../helpers/asyncHandler")
const { authentication } = require('../../auth/authUtils')

router.use(authentication)
router.get('/qrcode', asyncHandler(TwoFactorController.getQRCode))
router.post('/setup', asyncHandler(TwoFactorController.setup2FA))
router.put('/verify', asyncHandler(TwoFactorController.verify2FA))

module.exports = router