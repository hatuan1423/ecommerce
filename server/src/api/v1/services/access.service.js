'use strict'

const shopModel = require("../models/shop.model")
const bcrypt = require("bcrypt")
const KeyTokenService = require("./keyToken.service")
const { createTokenPair, createKeyPair, verifyJWT } = require("../auth/authUtils")
const { getInfoData } = require("../utils")
const { ROLE_SHOP } = require("../constants")
const { BadRequestError, UnauthorizedError, ForbiddenError } = require("../core/error.response")
const keyTokenModel = require("../models/keyToken.model")
const { findByEmail } = require("../models/repositories/shop.repository")

class AccessService {
    static signUp = async ({ firstName, lastName, dateOfBirth, gender, email, password }) => {
        const foundShop = await findByEmail({ email })
        if (foundShop) {
            throw new BadRequestError("Shop already registered!")
        }
        const hashPassword = bcrypt.hashSync(password, 10)
        const newShop = await shopModel.create({
            firstName, lastName, dateOfBirth, gender, email, password: hashPassword, roles: [ROLE_SHOP.SHOP]
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
                        fields: ['_id', 'email'],
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
        const match = bcrypt.compareSync(password, foundShop.password)
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
                fields: ['_id', 'email'],
                object: foundShop
            }),
            tokens
        }
    }

    static logout = async (keyStore) => {
        return await KeyTokenService.removeKeyById(keyStore._id)
    }

    static handleRefreshToken = async ({
        refreshToken,
        user,
        keyStore
    }) => {
        const { userId, email } = user

        if (keyStore.refreshTokensUsed.includes(refreshToken)) {
            await KeyTokenService.deleteKeyById(foundToken.user)
            throw new ForbiddenError('Something wrong happen! Please re login')
        }

        if (keyStore.refreshToken !== refreshToken) throw new UnauthorizedError('Shop not registered!')
        const foundShop = await findByEmail({ email })
        if (!foundShop) throw new UnauthorizedError('Shop not registered')

        const tokens = await createTokenPair({ userId, email }, keyStore.publicKey, keyStore.privateKey)

        await keyTokenModel.findByIdAndUpdate(keyStore._id, {
            $set: {
                refreshToken: tokens.refreshToken,
            },
            $addToSet: {
                refreshTokenUsed: refreshToken,
            }
        }, { new: true });

        return {
            user,
            tokens
        }
    }


}

module.exports = AccessService