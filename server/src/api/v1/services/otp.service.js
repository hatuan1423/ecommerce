const otp = require("../models/otp.model")
const { randomInt } = require("crypto")

class OtpService {
    static generateTokenRandom() {
        const token = randomInt(0, Math.pow(2, 32))
        return token
    }

    static async newOtp({ email }) {
        const token = this.generateTokenRandom()
        const newToken = await otp.create({
            otp_token: token,
            otp_email: email
        })
        return newToken
    }

}

module.exports = OtpService