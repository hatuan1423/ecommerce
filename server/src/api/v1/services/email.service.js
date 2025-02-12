const { NotFoundError } = require("../core/error.response")
const transporter = require("../dbs/init.nodemailer")
const { replacePlaceholder } = require("../utils")
const OtpService = require("./otp.service")
const TemplateService = require("./template.service")

class EmailService {
    static async sendEmailLinkVerify({
        html,
        toEmail,
        subject = 'Xác nhận email đăng kí'
    }) {
        try {
            const mailOptions = {
                from: '"Baya" <no-reply@baya.com>',
                to: toEmail,
                subject,
                html
            }

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    return console.log(err)
                }
                console.log('Sent email', info.messageId)
            })
        } catch (error) {
            throw error
        }
    }

    static async sendEmailToken({
        email = null
    }) {
        try {
            const token = await OtpService.newOtp({ email })
            const template = await TemplateService.getTemplate({
                temp_name: 'HTML EMAIL TOKEN'
            })
            if (!template) throw new NotFoundError("Template not found")
            const content = replacePlaceholder(template.temp_html, {
                link_verify: `http://localhost:3001/verify?token=${token.otp_token}`
            })
            await this.sendEmailLinkVerify({
                html: content,
                toEmail: email,
                subject: 'Vui lòng xác nhận địa chỉ email đăng kí'
            }).catch(err => console.error(err))
            return 1
        } catch (error) {
            throw error
        }
    }
}

module.exports = EmailService