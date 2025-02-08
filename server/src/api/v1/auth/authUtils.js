'use strict'

const jwt = require("jsonwebtoken")
const crypto = require("crypto")
const asyncHandler = require("../helpers/asyncHandler")
const { HEADER } = require("../constants")
const { UnauthorizedError, NotFoundError, GoneError } = require("../core/error.response")
const KeyTokenService = require("../services/keyToken.service")


const createTokenPair = async (payload, publicKey, privateKey) => {
    try {
        const accessToken = await jwt.sign(payload, publicKey, {
            expiresIn: '5s'
        })
        const refreshToken = await jwt.sign(payload, privateKey, {
            expiresIn: '7 days'
        })
        jwt.verify(accessToken, publicKey, (err, decode) => {
            if (err) {
                console.log('err', err);
            } else {
                console.log('decode', decode);
            }
        });
        return {
            accessToken,
            refreshToken
        }
    } catch (error) {
        return error
    }
}

const createKeyPair = () => {
    const publicKey = crypto.randomBytes(64).toString('hex')
    const privateKey = crypto.randomBytes(64).toString('hex')
    return {
        publicKey,
        privateKey
    }
}


const verifyJWT = (token, keySecret) => {
    return jwt.verify(token, keySecret)
}

const authentication = asyncHandler(async (req, res, next) => {
    const userId = req.headers[HEADER.CLIENT_ID]
    if (!userId) throw new UnauthorizedError('User id invalid')

    const keyStore = await KeyTokenService.findByUserId(userId)
    if (!keyStore) throw new NotFoundError('Key store invalid')
    if (req.cookies.refreshToken) {
        try {
            const refreshToken = req.cookies.refreshToken
            const decodeUser = jwt.verify(refreshToken, keyStore.privateKey)
            if (userId !== decodeUser.userId) throw new UnauthorizedError("Invalid user id")
            req.keyStore = keyStore
            req.user = decodeUser
            req.refreshToken = refreshToken

            return next()
        } catch (error) {
            throw new GoneError("Refresh token expired!")
        }
    }

    const accessToken = req.headers[HEADER.AUTHORIZATION]
    if (!accessToken) throw new UnauthorizedError('Access token invalid')
    try {
        const decodeUser = jwt.verify(accessToken, keyStore.publicKey)
        if (userId !== decodeUser.userId) throw new UnauthorizedError("Invalid user id")
        req.keyStore = keyStore
        req.user = decodeUser
        return next()
    } catch (error) {
        throw new GoneError("Access token expired!")
    }
})


module.exports = {
    createTokenPair,
    createKeyPair,
    authentication,
    verifyJWT
}