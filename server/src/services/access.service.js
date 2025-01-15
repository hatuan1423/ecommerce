'use strict'

const shopModel = require("../models/shop.model")
const bcrypt = require("bcrypt")
const crypto = require("crypto")

const RoleShop = {
    SHOP: 'SHOP',
    WRITER: 'WRITER',
    EDITOR: 'EDITOR',
    ADMIN: 'ADMIN'
}

class AccessService {
    static signUp = async ({ name, email, password }) => {
        try {
            const hodelShop = await shopModel.findOne({ email }).lean()
            if (!hodelShop) {
                return {
                    code: 'xxx',
                    message: 'Shop already registered!'
                }
            }
            const hashPassword = await bcrypt.hash(password, 10)
            const newShop = await shopModel.create({
                name, email, password: hashPassword, roles: [RoleShop.SHOP]
            })
            if (newShop) {
                //create private key, public key
                const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                    modulusLength: 4096,
                })
                console.log({ privateKey, publicKey })
            }
        } catch (error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error'
            }
        }
    }
}

module.exports = AccessService