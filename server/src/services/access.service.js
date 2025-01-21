'use strict'

const shopModel = require("../models/shop.model")
const bcrypt = require("bcrypt")
const KeyTokenService = require("./keyToken.service")
const { createTokenPair, createKeyPair } = require("../auth/authUtils")
const { getInfoData } = require("../utils")
const { ROLE_SHOP } = require("../constants")
const { BadRequestError, UnauthorizedError } = require("../core/error.response")
const { findByEmail } = require("./shop.service")

class AccessService {
    static signUp = async ({ name, email, password }) => {
        const foundShop = await findByEmail({ email })
        if (foundShop) {
            throw new BadRequestError("Shop already registered!")
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newShop = await shopModel.create({
            name, email, password: hashPassword, roles: [ROLE_SHOP.SHOP]
        })
        if (newShop) {
            const { privateKey, publicKey } = createKeyPair()
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
                metadata: {
                    shop: getInfoData({
                        fields: ['_id', 'name', 'email'],
                        object: newShop
                    }),
                    tokens
                }
            }
        }
        return {
            metadata: null
        }
    }

    static login = async ({ email, password, refreshToken = null }) => {
        const foundShop = await findByEmail({ email })
        if (!foundShop) {
            throw new BadRequestError("Shop not registered!")
        }
        const match = bcrypt.compare(password, foundShop.password)
        if (!match) {
            throw new UnauthorizedError("Authentication error!")
        }
        const { privateKey, publicKey } = createKeyPair()
        const tokens = await createTokenPair(
            {
                userId: foundShop._id,
                email
            },
            publicKey,
            privateKey
        )
        await KeyTokenService.createKeyToken({
            userId: foundShop._id,
            refreshToken: tokens.refreshToken,
            privateKey,
            publicKey
        })
        return {
            shop: getInfoData({
                fields: ['_id', 'name', 'email'],
                object: foundShop
            }),
            tokens
        }
    }
}

module.exports = AccessService