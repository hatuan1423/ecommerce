'use strict'

const shopModel = require("../models/shop.model")
const bcrypt = require("bcrypt")
const crypto = require("crypto")
const KeyTokenService = require("./keyToken.service")
const { createTokenPair } = require("../auth/authUtils")
const { getInfoData } = require("../utils")
const { ROLE_SHOP } = require("../constants")
const { BadRequestError } = require("../core/error.response")
const { CREATED } = require("../core/success.response")

class AccessService {
    static signUp = async ({ name, email, password }) => {
        const hodelShop = await shopModel.findOne({ email }).lean()
        if (hodelShop) {
            throw new BadRequestError("Shop already registered!")
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newShop = await shopModel.create({
            name, email, password: hashPassword, roles: [ROLE_SHOP.SHOP]
        })
        if (newShop) {
            const publicKey = crypto.randomBytes(64).toString('hex')
            const privateKey = crypto.randomBytes(64).toString('hex')
            const keyStore = await KeyTokenService.createKeyToken({
                userId: newShop._id,
                publicKey,
                privateKey
            })
            if (!keyStore) {
                throw new BadRequestError("Key store error!")
            }
            const tokens = await createTokenPair(
                {
                    userId: newShop._id,
                    email
                },
                publicKey,
                privateKey
            )
            return {
                code: 201,
                metadata: {
                    shop: getInfoData({
                        fields: ['_id', 'name', 'email'],
                        object: newShop
                    }),
                    tokens
                }
            }
        }
        new CREATED({
            metadata: null
        })
    }
}

module.exports = AccessService