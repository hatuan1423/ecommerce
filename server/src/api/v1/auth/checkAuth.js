'use strict'

const { HEADER } = require("../constants")
const { findById } = require("../services/apiKey.service")
const { ForbiddenError } = require("../core/error.response")

const apiKey = async (req, res, next) => {
    try {
        const key = req.headers[HEADER.API_KEY]?.toString()
        if (!key) throw new ForbiddenError("Forbidden error!")
        const objKey = await findById(key)
        if (!objKey) throw new ForbiddenError("Forbidden error!")
        req.objKey = objKey
        return next()
    } catch (error) {

    }
}

const permission = (permission) => {
    return (req, res, next) => {
        if (!req.objKey.permissions) throw new ForbiddenError("Forbidden error!")
        const validPermission = req.objKey.permissions.includes(permission)
        if (!validPermission) throw new ForbiddenError("Forbidden error!")
        return next()
    }
}

module.exports = {
    apiKey,
    permission
}