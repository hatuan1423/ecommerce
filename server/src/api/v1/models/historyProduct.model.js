'use strict'

const { model, Schema } = require("mongoose")
const DOCUMENT_NAME = 'HistoryProduct'
const COLLECTION_NAME = 'HistoryProducts'

const historyProductSchema = new Schema({
    product_name: { type: String, required: true },
    product_thumb: { type: String },
    product_description: { type: String },
    product_price: { type: Number },
    product_quantity: { type: Number },
    product_type: { type: String },
    product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
    deletedAt: { type: Date, default: Date.now }
},
    {
        timestamps: true,
        collection: COLLECTION_NAME
    })

historyProductSchema.index({ product_name: 'text', product_description: 'text' })

module.exports = model(DOCUMENT_NAME, historyProductSchema)