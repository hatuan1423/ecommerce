const express = require('express')
const router = express.Router()
const asyncHandler = require("../../helpers/asyncHandler")
const RbacController = require('../../controllers/rbac.controller')

router.post('/role', asyncHandler(RbacController.createNewRole))
router.post('/resource', asyncHandler(RbacController.createNewResource))
router.get('/roles', asyncHandler(RbacController.getListRole))
router.get('/resources', asyncHandler(RbacController.getListResource))

module.exports = router