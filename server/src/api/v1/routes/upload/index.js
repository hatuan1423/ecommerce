const express = require('express')
const router = express.Router()
const asyncHandler = require("../../helpers/asyncHandler")
const { uploadDisk, uploadMemory } = require("../../configs/multer.config")
const uploadController = require('../../controllers/upload.controller')

router.post('/product', asyncHandler(uploadController.uploadFile))
router.post('/product/thumb', uploadDisk.single('file'), asyncHandler(uploadController.uploadFileThumb))
router.post('/product/multi', uploadDisk.array('files', 3), asyncHandler(uploadController.uploadImageFromLocalFiles))

router.post('/product/bucket', uploadMemory.single('file'), asyncHandler(uploadController.uploadImageFromLocalS3))

module.exports = router