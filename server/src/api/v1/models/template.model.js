const { model, Schema } = require("mongoose")

const DOCUMENT_NAME = 'Template'
const COLLECTION_NAME = 'Templates'

const templateSchema = new Schema({
    temp_id: { type: Number, required: true },
    temp_name: { type: String, required: true },
    temp_status: { type: String, default: 'active' },
    temp_html: { type: String, required: true }
}, {
    timestamps: true,
    collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, templateSchema)