'use strict'

class AccessController {
    signUp = async (req, res, next) => {
        try {
            console.log(req.body)
            return res.status(200).json({
                code: 200,
                metadata: {
                    userid: 1
                }
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AccessController