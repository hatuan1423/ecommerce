'use strict'

const { sofa, bathroom, bed, bedding, cabinet, chair, decorate, kitchen, office, table } = require("../models/product.model")

const productConfigs = [
    { type: 'sofa-ghe-thu-gian', model: sofa },
    { type: 'ban', model: table },
    { type: 'ghe', model: chair },
    { type: 'giuong-nem', model: bed },
    { type: 'chan-ga-goi', model: bedding },
    { type: 'tu-ke', model: cabinet },
    { type: 'noi-that-van-phong', model: office },
    { type: 'trang-tri', model: decorate },
    { type: 'nha-bep', model: kitchen },
    { type: 'phong-tam', model: bathroom },
]

module.exports = productConfigs
