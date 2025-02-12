const template = require("../models/template.model")
const { htmlEmailToken } = require("../utils/template.html")

class TemplateService {
    static async newTemplate({
        temp_name,
        temp_id = 1,
        temp_html
    }) {
        const newTemplate = await template.create({
            temp_name,
            temp_id,
            temp_html: htmlEmailToken()
        })
        return newTemplate
    }

    static async getTemplate({
        temp_name
    }) {
        return await template.findOne({
            temp_name
        })
    }
}

module.exports = TemplateService 