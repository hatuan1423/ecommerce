const { Schema, model } = require("mongoose")

const DOCUMENT_NAME = 'OTP_Log'
const COLLECTION_NAME = 'OTP_Logs'

const otpSchema = new Schema({
    otp_token: { type: String, required: true },
    otp_email: { type: String, required: true },
    otp_status: { type: String, default: 'pending', enum: ['pending', 'active', 'block'] },
    expireAt: {
        type: Date,
        default: Date.now,
        expires: 60
    }
}, {
    timestamps: true,
    collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, otpSchema)