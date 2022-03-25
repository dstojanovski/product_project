const express = require('express');
const ProductController = require('../controllers/productController');

const router = express.Router();

// Get and Post request on the /product endpoint.
router.route('/')
.get(ProductController.getAllProducts)
.post(ProductController.addNewProduct);

// Get, Put, Delete request on /product/:id endpoint.
router.route('/:id')
.get(ProductController.getProduct)
.put(ProductController.updateProduct)
.delete(ProductController.deleteProduct);

module.exports = router;