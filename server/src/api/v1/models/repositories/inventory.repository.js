'use strict'

const inventorySchema = require("../inventory.model")
const { Types } = require("mongoose")

const insertInventory = async ({
    productId, shopId, stock, location = 'unKnown'
}) => {
    return await inventorySchema.create({
        inven_productId: productId,
        inven_location: location,
        inven_shopId: shopId,
        inven_stock: stock,
    })
}

module.exports = {
    insertInventory
}