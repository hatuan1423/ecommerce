'use strict'

const { model, Schema } = require("mongoose")
const DOCUMENT_NAME = 'Inventory'
const COLLECTION_NAME = 'Inventories'

const inventorySchema = new Schema({
    inven_productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    inven_location: { type: String, required: true, default: 'Unknown' },
    inven_stock: { type: Number, required: true },
    inven_shopId: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
    inven_reservation: { type: Array, default: [] }
},
    {
        timestamps: true,
        collection: COLLECTION_NAME
    })

module.exports = model(DOCUMENT_NAME, inventorySchema)