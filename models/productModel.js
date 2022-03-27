const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ['true', 'Please add a name for the product']
    },
    price: {
        type: Number,
        required: ['true', 'Please add price for the product']
    },
    dateCreated: {
        type: Date,
    },
    available: {
        type: Boolean,
        required: ['true', 'Please add if the product is available']
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;