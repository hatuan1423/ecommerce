'use strict'

const express = require('express')
const router = express.Router()
const asyncHandler = require("../../helpers/asyncHandler")
const { authentication } = require('../../auth/authUtils')
const emailController = require('../../controllers/email.controller')

router.post('/template', asyncHandler(emailController.newTemplate))

module.exports = router