const user = require("../models/user.model")
const { BadRequestError, NotFoundError } = require("../core/error.response")
const EmailService = require("./email.service")
const OtpService = require("./otp.service")
const { createKeyPair, createTokenPair } = require("../auth/authUtils")
const bcrypt = require("bcrypt")
const { createUser } = require("../models/repositories/user.repository")
const KeyTokenService = require("./keyToken.service")
const { getInfoData } = require("../utils")

class UserService {
    static async findUserByEmail(email) {
        return await user.findOne({ user_email: email }).lean()
    }

    static async newUser({ email = null }) {
        const foundUser = await user.findOne({ user_email: email }).lean()
        if (foundUser) throw new BadRequestError("User already existed!")
        const result = await EmailService.sendEmailToken({
            email
        })
        return result
    }

    static async checkLoginEmailToken({ token = null }) {
        try {
            const { otp_email: email, otp_token } = await OtpService.checkEmailToken({ token })
            if (!email) throw new NotFoundError("Token not found!")
            const foundUser = await this.findUserByEmail(email)
            if (foundUser) throw new NotFoundError("User already existed!")

            const hashPassword = bcrypt.hashSync(email, 10)
            const newUser = await createUser({
                user_id: 1,
                user_slug: 's001',
                user_email: email,
                user_name: email,
                user_password: hashPassword,
            })
            if (newUser) {
                const { privateKey, publicKey } = createKeyPair()
                const keyStore = await KeyTokenService.createKeyToken({
                    userId: newUser.user_id,
                    publicKey,
                    privateKey
                })
                if (!keyStore) throw new BadRequestError("Key store error!")
                const tokens = await createTokenPair(
                    {
                        userId: newUser.user_id,
                        email
                    },
                    publicKey,
                    privateKey
                )
                return {
                    metadata: {
                        user: getInfoData({
                            fields: ['user_id', 'user_email'],
                            object: newUser
                        }),
                        tokens
                    }
                }
            }
        } catch (error) {
            throw error
        }
    }

}

module.exports = UserService