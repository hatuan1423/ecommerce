const { NotFoundError } = require("../core/error.response")
const { findShopById } = require("../models/repositories/shop.repository")
const shopSession = require("../models/shopSession.model")

class ShopService {
    static findShop = async ({ shop_id, device_id }) => {
        let foundShop = await findShopById({ shop_id, unSelect: ['__v', 'updatedAt', 'password'] })
        if (!foundShop) throw new NotFoundError("Shop not found!")
        if (foundShop.required_2fa) {
            const currentShopSession = await shopSession.findOne({
                shop_id: foundShop._id,
                device_id
            })
            if (currentShopSession) {
                foundShop['is_2fa_required'] = currentShopSession.is_2fa_required
                foundShop['last_login'] = currentShopSession.last_login
            }
        }
        return foundShop
    }
}

module.exports = ShopService