const { model, Schema } = require("mongoose")
const DOCUMENT_NAME = 'ShopSession'
const COLLECTION_NAME = 'ShopSessions'

const shopSessionSchema = new Schema({
    shop_id: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
    device_id: { type: String, required: true },
    is_2fa_required: { type: Boolean, default: false },
    last_login: { type: String }
},
    {
        timestamps: true,
        collection: COLLECTION_NAME
    })

module.exports = model(DOCUMENT_NAME, shopSessionSchema)