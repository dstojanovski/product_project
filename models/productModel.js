const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    dateCreated: {
        type: Date,
        default: Date.now(),
    },
    available: {
        type: Boolean,
        default: true
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;