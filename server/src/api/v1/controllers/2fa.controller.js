'use strict'

const { CREATED, SuccessResponse } = require("../core/success.response")
const TwoFactorAuthService = require("../services/2fa.service")

class TwoFactorController {
    getQRCode = async (req, res, next) => {
        new CREATED({
            message: "Get QR Code success!",
            metadata: await TwoFactorAuthService.getQRCode({
                shop_id: req.user.userId
            })
        }).send(res)
    }
    setup2FA = async (req, res, next) => {
        new SuccessResponse({
            message: "Setup 2FA success!",
            metadata: await TwoFactorAuthService.setup2FA({
                shop_id: req.user.userId,
                otpToken: req.body.otpToken,
                device_id: req.headers['user-agent']
            })
        }).send(res)
    }
    verify2FA = async (req, res, next) => {
        new SuccessResponse({
            message: "Verify 2FA success!",
            metadata: await TwoFactorAuthService.verify2FA({
                shop_id: req.user.userId,
                otpToken: req.body.otpToken,
                device_id: req.headers['user-agent']
            })
        }).send(res)
    }
}

module.exports = new TwoFactorController