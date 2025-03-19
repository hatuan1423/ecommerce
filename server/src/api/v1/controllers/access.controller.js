const AccessService = require("../services/access.service")
const { CREATED, SuccessResponse } = require("../core/success.response")
const ms = require("ms")

class AccessController {
    signUp = async (req, res, next) => {
        new CREATED({
            message: "Registered success!",
            metadata: await AccessService.signUp(req.body)
        }).send(res)
    }
    login = async (req, res, next) => {
        const data = await AccessService.login(req.body)
        const { tokens } = data
        res.cookie('refreshToken', tokens.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: ms('14 days'),
        })
        new SuccessResponse({
            message: "Login success!",
            metadata: data
        }).send(res)
    }
    loginGoogle = async (req, res, next) => {
        new SuccessResponse({
            message: "Login success!",
            metadata: AccessService.loginGoogle({ token: req.body.token })
        }).send(res)
    }
    logout = async (req, res, next) => {
        res.clearCookie('refreshToken');
        new SuccessResponse({
            message: "Logout success!",
            metadata: await AccessService.logout({
                keyStore: req.keyStore,
                shop_id: req.user.userId,
                device_id: req.headers['user-agent']
            })
        }).send(res)
    }
    handleRefreshToken = async (req, res, next) => {
        const data = await AccessService.handleRefreshToken({
            refreshToken: req.refreshToken,
            user: req.user,
            keyStore: req.keyStore
        })
        const { tokens } = data
        res.cookie('refresh', tokens.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: ms('14 days'),
        })
        new SuccessResponse({
            message: "Get token success!",
            metadata: data
        }).send(res)
    }
}

module.exports = new AccessController