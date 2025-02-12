const { SuccessResponse } = require("../core/success.response")
const TemplateService = require("../services/template.service")

class EmailController {
    newTemplate = async (req, res, next) => {
        new SuccessResponse({
            message: "Create new template success!",
            metadata: await TemplateService.newTemplate(req.body)
        }).send(res)
    }
}

module.exports = new EmailController