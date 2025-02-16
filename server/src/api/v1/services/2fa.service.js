const { findShopById, updateShop } = require("../models/repositories/shop.repository")
const { NotFoundError, UnauthorizedError } = require("../core/error.response")
const key2FA = require("../models/key2FA.model")
const qrcode = require("qrcode")
const { authenticator } = require("otplib")
const { foundSecretKeyById } = require("../models/repositories/key2FA.repository")
const { NAME_SERVICE_2FA } = require("../constants")
const shopSession = require("../models/shopSession.model")
const { getInfoData } = require("../utils")

class TwoFactorAuthService {
    static async getQRCode({ shop_id }) {
        const foundShop = await findShopById({ shop_id })
        if (!foundShop) throw new NotFoundError("Shop not found!")
        let secretKey = null
        const foundSecretKey = await foundSecretKeyById(shop_id)
        if (!foundSecretKey) {
            const newSecretKey = await key2FA.create({
                shop_id,
                value: authenticator.generateSecret()
            })
            secretKey = newSecretKey.value
        } else {
            secretKey = foundSecretKey.value
        }
        const otpAuthToken = authenticator.keyuri(shop_id, NAME_SERVICE_2FA, secretKey)
        const qrCodeImageUrl = await qrcode.toDataURL(otpAuthToken)
        return {
            qrcode: qrCodeImageUrl
        }
    }

    static async setup2FA({ shop_id, otpToken, device_id }) {
        const foundShop = await findShopById({ shop_id })
        if (!foundShop) throw new NotFoundError("Shop not found!")
        const foundSecretKey = await foundSecretKeyById(shop_id)
        if (!foundSecretKey) throw new NotFoundError("Key not found!")
        const isValid = authenticator.verify({
            token: otpToken,
            secret: foundSecretKey.value
        })
        if (!isValid) throw new UnauthorizedError("Invalid token OTP!")
        const updatedShop = await updateShop({
            query: {
                _id: shop_id
            },
            update: {
                $set: {
                    required_2fa: true
                }
            },
            options: {
                upsert: true, new: true
            }
        })
        const updatedShopSession = await shopSession.findOneAndUpdate({
            shop_id: shop_id,
            device_id
        },
            {
                $set: {
                    is_2fa_required: true
                }
            }, {
            upsert: true,
            new: true
        })
        return {
            shop: updatedShop,
            is_2fa_required: updatedShopSession.is_2fa_required,
            last_login: updatedShopSession.last_login
        }
    }

    static async verify2FA({ shop_id, otpToken, device_id }) {
        const foundShop = await findShopById({ shop_id })
        if (!foundShop) throw new NotFoundError("Shop not found!")
        const foundSecretKey = await foundSecretKeyById(shop_id)
        if (!foundSecretKey) throw new NotFoundError("Key not found!")
        const isValid = authenticator.verify({
            token: otpToken,
            secret: foundSecretKey.value
        })
        if (!isValid) throw new UnauthorizedError("Invalid token OTP!")

        const updatedShopSession = await shopSession.findOneAndUpdate({
            shop_id: shop_id,
            device_id
        }, {
            $set: {
                is_2fa_required: true
            }
        }, {
            upsert: true,
            new: true
        })

        return {
            shop: foundShop,
            is_2fa_required: updatedShopSession.is_2fa_required,
            last_login: updatedShopSession.last_login
        }
    }
}

module.exports = TwoFactorAuthService