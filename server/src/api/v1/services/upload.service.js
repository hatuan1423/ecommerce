const cloudinary = require("../configs/cloudinary.config")
const { s3, PutObjectCommand } = require("../configs/s3.config")
const crypto = require('crypto')

class UploadService {

    static async uploadImageFromLocalS3({
        file
    }) {
        try {
            const randomImageName = () => crypto.randomBytes(16).toString("hex")
            const command = new PutObjectCommand({
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: randomImageName(), //file.originalname || 'unknown',
                Body: file.buffer,
                ContentType: 'image/jpeg'
            })

            const result = await s3.send(command)
            return result
        } catch (error) {
            console.error(error)
        }
    }

    static async uploadImageFromUrl() {
        try {
            const urlImage = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
            const folderName = 'product/shopId', newFileName = 'demo'
            const result = await cloudinary.uploader.upload(urlImage, {
                public_id: newFileName,
                folder: folderName
            })
            return result
        } catch (error) {
            console.error(error)
        }
    }

    static async uploadImageFromLocal({
        path, folderName = 'product/8049'
    }) {
        try {
            const result = await cloudinary.uploader.upload(path, {
                public_id: 'thumb',
                folder: folderName
            })
            return {
                secure_url: result.secure_url,
                thumb_size: await cloudinary.url(result.public_id, {
                    height: 100,
                    width: 100,
                    format: 'jpg'
                })
            }
        } catch (error) {
            console.error(error)
        }
    }

    static async uploadImageFromLocalFiles({
        files, folderName = 'product/8049'
    }) {
        try {
            if (!files.length) return
            const uploadedUrls = []
            for (const file of files) {
                const result = await cloudinary.uploader.upload(file.path, {
                    folder: folderName
                })
                uploadedUrls.push({
                    secure_url: result.secure_url,
                    thumb_size: await cloudinary.url(result.public_id, {
                        height: 100,
                        width: 100,
                        format: 'jpg'
                    })
                })
            }

            return uploadedUrls
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = UploadService
