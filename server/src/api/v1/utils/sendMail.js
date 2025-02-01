const nodemailer = require('nodemailer');
const asyncHandler = require('../helpers/asyncHandler');

const sendMail = asyncHandler(async ({ email, html }) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_NAME,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });

    const info = await transporter.sendMail({
        from: '"Baya" <no-relply@baya.com>',
        to: email,
        subject: "Baya - Đổi mật khẩu",
        html: html,
    });

    return info
})

module.exports = sendMail