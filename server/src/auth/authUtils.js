'use strict'

const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const createTokenPair = async (payload, publicKey, privateKey) => {
    try {
        const accessToken = await jwt.sign(payload, publicKey, {
            expiresIn: '2 days'
        })
        const refreshToken = await jwt.sign(payload, privateKey, {
            expiresIn: '7 days'
        })
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

module.exports = {
    createTokenPair,
    createKeyPair
}