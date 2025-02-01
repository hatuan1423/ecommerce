'use strict'

const { model, Schema } = require("mongoose")
const DOCUMENT_NAME = 'Shop'
const COLLECTION_NAME = 'Shops'

const shopSchema = new Schema({
    firstName: { type: String, trim: true, maxLength: 50, required: true },
    lastName: { type: String, trim: true, maxLength: 50, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    email: { type: String, trim: true, unique: true, required: true },
    password: { type: String, required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
    verify: { type: Schema.Types.Boolean, default: false },
    roles: { type: Array, default: [] }
},
    {
        timestamps: true,
        collection: COLLECTION_NAME
    })

module.exports = model(DOCUMENT_NAME, shopSchema)