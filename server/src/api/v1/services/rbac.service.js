const resource = require("../models/resource.model")
const role = require("../models/role.model")

const createResource = async ({
    name = 'profile', slug = 'p001', description = ''
}) => {
    try {
        const newResource = await resource.create({
            src_name: name,
            src_slug: slug,
            src_description: description
        })
        return newResource
    } catch (error) {
        return error
    }
}

const resourceList = async ({
    userId = 0, limit = 30, offset = 0, search = ''
}) => {
    try {
        const resources = await resource.aggregate([
            {
                $project: {
                    _id: 0,
                    name: '$src_name',
                    slug: '$src_slug',
                    description: '$src_description',
                    resourceId: '$_id',
                    createdAt: 1
                }
            }
        ])
        return resources
    } catch (error) {
        return error
    }
}

const createRole = async ({
    name = 'shop',
    slug = 's0001',
    description = '',
    grants = []
}) => {
    try {
        const newRole = await role.create({
            role_name: name,
            role_slug: slug,
            role_description: description,
            role_grants: grants,
        })
        return newRole
    } catch (error) {
        return error
    }
}


const roleList = async ({
    userId = 0, limit = 30, offset = 0, search = ''
}) => {
    try {
        const roles = await role.aggregate([
            {
                $unwind: '$role_grants'
            },
            {
                $lookup: {
                    from: "Resources",
                    localField: 'role_grants.resource',
                    foreignField: '_id',
                    as: 'resource'
                }
            },
            {
                $unwind: '$resource'
            },
            {
                $project: {
                    role: '$role_name',
                    resource: '$resource.src_name',
                    action: '$role_grants.actions',
                    attributes: '$role_grants.attributes'
                }
            },
            {
                $unwind: '$action'
            },
            {
                $project: {
                    _id: 0,
                    role: 1,
                    resource: 1,
                    action: "$action",
                    attributes: 1
                }
            }
        ])
        return roles
    } catch (error) {

    }
}

const RbacService = {
    createResource,
    resourceList,
    createRole,
    roleList
}

module.exports = RbacService