const { SuccessResponse } = require("../core/success.response")
const RbacService = require("../services/rbac.service")

const createNewRole = async (req, res, next) => {
    new SuccessResponse({
        message: 'Create new role success!',
        metadata: await RbacService.createRole(req.body)
    }).send(res)
}

const createNewResource = async (req, res, next) => {
    new SuccessResponse({
        message: 'Create new resource success!',
        metadata: await RbacService.createResource(req.body)
    }).send(res)
}

const getListRole = async (req, res, next) => {
    new SuccessResponse({
        message: 'Get list role success!',
        metadata: await RbacService.roleList(req.query)
    }).send(res)
}

const getListResource = async (req, res, next) => {
    new SuccessResponse({
        message: 'Get list resource success!',
        metadata: await RbacService.resourceList(req.query)
    }).send(res)
}

const RbacController = {
    createNewRole,
    createNewResource,
    getListRole,
    getListResource
}

module.exports = RbacController