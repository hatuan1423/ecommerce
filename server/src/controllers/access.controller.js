'use strict'

const AccessService = require("../services/access.service")
const { CREATED, SuccessResponse } = require("../core/success.response")

class AccessController {
    signUp = async (req, res, next) => {
        new CREATED({
            message: "Registered OK!",
            metadata: await AccessService.signUp(req.body)
        }).send(res)
    }
    login = async (req, res, next) => {
        new SuccessResponse({
            message: "Login OK!",
            metadata: await AccessService.login(req.body)
        }).send(res)
    }
    logout = async (req, res, next) => {
        new SuccessResponse({
            message: "Logout OK!",
            metadata: await AccessService.logout(req.keyStore)
        }).send(res)
    }
    handleRefreshToken = async (req, res, next) => {
        new SuccessResponse({
            message: "Get token OK!",
            metadata: await AccessService.handleRefreshToken({
                refreshToken: req.refreshToken,
                user: req.user,
                keyStore: req.keyStore
            })
        }).send(res)
    }
}

module.exports = new AccessController