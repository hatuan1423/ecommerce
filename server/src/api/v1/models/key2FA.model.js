'use strict'

const { model, Schema } = require("mongoose")
const DOCUMENT_NAME = 'Key2FA'
const COLLECTION_NAME = 'Key2FAs'

const key2FASchema = new Schema({
    shop_id: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
    value: { type: String, required: true },
},
    {
        timestamps: true,
        collection: COLLECTION_NAME
    })

module.exports = model(DOCUMENT_NAME, key2FASchema)