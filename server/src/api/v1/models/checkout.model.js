'use strict'

const { model, Schema } = require("mongoose")
const DOCUMENT_NAME = 'Checkout'
const COLLECTION_NAME = 'Checkouts'

const checkoutSchema = new Schema({

},
    {
        timestamps: true,
        collection: COLLECTION_NAME
    })

module.exports = model(DOCUMENT_NAME, checkoutSchema)