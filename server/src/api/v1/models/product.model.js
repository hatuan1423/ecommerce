const { model, Schema } = require("mongoose")
const slugify = require('slugify')
const DOCUMENT_NAME = 'Product'
const COLLECTION_NAME = 'Products'

const productSchema = new Schema({
    product_name: { type: String, required: true },
    product_thumb: { type: String, required: true },
    product_description: { type: String },
    product_slug: { type: String },
    product_price: { type: Number, required: true },
    product_quantity: { type: Number, required: true },
    product_type: {
        type: String,
        required: true,
        enum: ['sofa-ghe-thu-gian', 'ban', 'ghe', 'giuong-nem', 'chan-ga-goi', 'tu-ke', 'noi-that-van-phong', 'trang-tri', 'nha-bep', 'phong-tam']
    },
    product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
    product_attributes: { type: Schema.Types.Mixed, required: true },
    product_ratingsAverage: {
        type: Number,
        default: 4,
        min: [1, 'Rating must be above 1'],
        max: [5, 'Rating must be above 5'],
        set: (val) => Math.round(val * 10) / 10
    },
    product_variation: { type: Array, default: [] },
    isDraft: { type: Boolean, default: true, index: true, select: false },
    isPublished: { type: Boolean, default: false, index: true, select: false }
},
    {
        timestamps: true,
        collection: COLLECTION_NAME
    })

productSchema.index({ product_name: 'text', product_description: 'text' })

productSchema.pre('save', function (next) {
    this.product_slug = slugify(this.product_name, { lower: true })
    next()
})

const sofaSchema = new Schema({
    product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
    brand: { type: String, required: true },
    color: { type: Array, default: [] },
    size: { type: Array, default: [] },
    style: { type: Array, default: [] },
    description: { type: String },
    material: { type: Array, default: [] },
    type: {
        type: String, required: true,
        enum: ['sofa', 'ghe-thu-gian', 'dem-ngoi']
    },
}, {
    collection: 'Sofas',
    timestamps: true
})

const tableSchema = new Schema({
    product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
    brand: { type: String, required: true },
    color: { type: Array, default: [] },
    size: { type: Array, default: [] },
    style: { type: Array, default: [] },
    description: { type: String },
    material: { type: Array, default: [] },
    type: {
        type: String, required: true,
        enum: ['ban-an', 'ban-tra-ca-phe', 'ban-lam-viec', 'ban-hoc', 'ban-trang-diem', 'ban-goc', 'ban-ngoai-troi', 'bo-ban-ghe']
    },
}, {
    collection: 'Tables',
    timestamps: true
})

const chairSchema = new Schema({
    product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
    brand: { type: String, required: true },
    color: { type: Array, default: [] },
    size: { type: Array, default: [] },
    style: { type: Array, default: [] },
    description: { type: String },
    material: { type: Array, default: [] },
    type: {
        type: String, required: true,
        enum: ['ghe-an', 'ghe-don', 'ghe-van-phong', 'ghe-ngoi-hoc', 'ghe-tre-em', 'ghe-thu-gian']
    },
}, {
    collection: 'Chairs',
    timestamps: true
})

const bedSchema = new Schema({
    product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
    brand: { type: String, required: true },
    color: { type: Array, default: [] },
    size: { type: Array, default: [] },
    style: { type: Array, default: [] },
    description: { type: String },
    material: { type: Array, default: [] },
    type: {
        type: String, required: true,
        enum: ['giuong', 'nem', 'nem-yoga']
    },
}, {
    collection: 'Beds',
    timestamps: true
})

const beddingSchema = new Schema({
    product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
    brand: { type: String, required: true },
    color: { type: Array, default: [] },
    size: { type: Array, default: [] },
    style: { type: Array, default: [] },
    description: { type: String },
    material: { type: Array, default: [] },
    type: {
        type: String, required: true,
        enum: ['chan', 'ga', 'goi-ngu', 'goi-tua', 'goi-om', 'goi-tap-yoga']
    },
}, {
    collection: 'Beddings',
    timestamps: true
})

const cabinetSchema = new Schema({
    product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
    brand: { type: String, required: true },
    color: { type: Array, default: [] },
    size: { type: Array, default: [] },
    style: { type: Array, default: [] },
    description: { type: String },
    material: { type: Array, default: [] },
    type: {
        type: String, required: true,
        enum: ['ke-sach', 'tu-quan-ao', 'tu-ke-tivi', 'tu-dau-giuong', 'tu-ke-giay', 'tu-ngan-keo']
    },
}, {
    collection: 'Cabinets',
    timestamps: true
})

const officeSchema = new Schema({
    product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
    brand: { type: String, required: true },
    color: { type: Array, default: [] },
    size: { type: Array, default: [] },
    style: { type: Array, default: [] },
    description: { type: String },
    material: { type: Array, default: [] },
    type: {
        type: String, required: true,
        enum: ['ghe-van-phong', 'dung-cu-van-phong']
    },
}, {
    collection: 'Offices',
    timestamps: true
})

const decorateSchema = new Schema({
    product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
    brand: { type: String, required: true },
    color: { type: Array, default: [] },
    size: { type: Array, default: [] },
    style: { type: Array, default: [] },
    description: { type: String },
    material: { type: Array, default: [] },
    type: {
        type: String, required: true,
        enum: ['lo-hoa-binh-hoa', 'guong-treo-tuong', 'guong-dung', 'nen-thom', 'dong-ho-bao-thuc', 'tien-ich-sap-xep']
    },
}, {
    collection: 'Decorates',
    timestamps: true
})

const kitchenSchema = new Schema({
    product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
    brand: { type: String, required: true },
    color: { type: Array, default: [] },
    size: { type: Array, default: [] },
    style: { type: Array, default: [] },
    description: { type: String },
    material: { type: Array, default: [] },
    type: {
        type: String, required: true,
        enum: ['to-chen-dia', 'coc-ly', 'am-tra-bo-am-tra', 'dung-cu-nau-nuong', 'gia-do-dung-cu-dung', 'khan-trai-ban', 'gang-tay-tap-de']
    },
}, {
    collection: 'Kitchens',
    timestamps: true
})

const bathroomSchema = new Schema({
    product_shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
    brand: { type: String, required: true },
    color: { type: Array, default: [] },
    size: { type: Array, default: [] },
    style: { type: Array, default: [] },
    description: { type: String },
    material: { type: Array, default: [] },
    type: {
        type: String, required: true,
        enum: ['tham-phong-tam', 'rem-tam', 'vat-dung-phong-tam']
    },
}, {
    collection: 'Bathrooms',
    timestamps: true
})

module.exports = {
    product: model(DOCUMENT_NAME, productSchema),
    sofa: model('Sofa', sofaSchema),
    table: model('Table', tableSchema),
    chair: model('Chair', chairSchema),
    bed: model('Bed', bedSchema),
    bedding: model('Bedding', beddingSchema),
    cabinet: model('Cabinet', cabinetSchema),
    office: model('Office', officeSchema),
    decorate: model('Decorate', decorateSchema),
    kitchen: model('Kitchen', kitchenSchema),
    bathroom: model('Bathroom', bathroomSchema),
}