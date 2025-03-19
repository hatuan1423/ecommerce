const express = require('express')
const accessController = require('../../controllers/access.controller')
const router = express.Router()
const asyncHandler = require("../../helpers/asyncHandler")
const { authentication } = require('../../auth/authUtils')
const accessValidator = require('../../validators/access.validator')

router.post('/shop/signup', accessValidator.validateSignup, asyncHandler(accessController.signUp))
router.post('/shop/login', accessValidator.validateLogin, asyncHandler(accessController.login))
router.post('/shop/login/google', asyncHandler(accessController.loginGoogle))

router.use(authentication)
router.post('/shop/logout', asyncHandler(accessController.logout))
router.post('/shop/refreshToken', asyncHandler(accessController.handleRefreshToken))

module.exports = router