const { SuccessResponse } = require("../core/success.response")
const UploadService = require("../services/upload.service")
const { BadRequestError } = require("../core/error.response")

class UploadController {
    uploadFile = async (req, res, next) => {
        new SuccessResponse({
            message: "Upload file success!",
            metadata: await UploadService.uploadImageFromUrl()
        }).send(res)
    }
    uploadFileThumb = async (req, res, next) => {
        const { file } = req
        if (!file) throw new BadRequestError("File missing error!")
        new SuccessResponse({
            message: "Upload file success!",
            metadata: await UploadService.uploadImageFromLocal({
                path: file.path
            })
        }).send(res)
    }

    uploadImageFromLocalFiles = async (req, res, next) => {
        const { files } = req
        if (!files.length) throw new BadRequestError("Files missing error!")
        new SuccessResponse({
            message: "Upload files success!",
            metadata: await UploadService.uploadImageFromLocalFiles({
                files
            })
        }).send(res)
    }
}

module.exports = new UploadController