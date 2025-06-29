const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    seller: {
        type: String,
        required : [true, 'Name of seller is required'],
        trim : true,
        maxLength: [50, 'Seller name can not be more than 50 characters']
    },
    product: {
       type: String,
        required : [true, 'Name of product is required'],
        trim : true, 
        maxLength: [50, 'Product name can not be more than 50 characters']
    },
    cost: {
        type: Number,
        required : [true, 'Cost of product is required']
    },
    quantity: {
        type: Number,
        required: [true, 'The quntity of product available is required']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Product', productSchema)