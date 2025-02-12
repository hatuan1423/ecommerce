const express = require('express')
const router = express.Router()
const asyncHandler = require("../../helpers/asyncHandler")
const userController = require('../../controllers/user.controller')

router.post('/new_user', asyncHandler(userController.newUser))
router.get('/welcome', asyncHandler(userController.checkRegisterEmailToken))

module.exports = router