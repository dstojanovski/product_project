const Product = require('../models/productModel');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

// Get all products.
exports.getAllProducts = async (req, res) => {
    try{
        const allProducts = await Product.find().select("-__v");
        res.status(200).json({
            results: allProducts.length,
            data: {
                products: allProducts,
        }
        });
    }

    catch(err) {
        res.status(200).json({
            status: 'Bad request',
            message: err,
        });
    }
};

// Get the product by id.
exports.getProduct =  async(req, res) => {
    try{
        const product = await Product.findById(req.params.id).select("-__v");

        if (!product){
            return next(new AppError('The product is not found', 404));
        }

        res.status(200).json({
            status: "success",
            data: {
                product: product,
            }
        });
    }

    catch(err) {
        res.status(200).json({
            status: 'Bad request',
            message: err,
        });
    }
};

// Refactor to handleController.
// Update the product
exports.updateProduct = factory.updateOne(Product)

// Add a new product.
exports.addNewProduct = async (req, res) => {
    try{
        const newProduct = await Product.create({
            name: req.body.name,
            price: req.body.price,
            available: req.body.available,
        });

        res.status('200').json({
            status: 'success',
            data : {
                product : newProduct,
            }
        });
    }

    catch(err) {
        res.status(200).json({
            status: 'Bad request',
            message: err,
        });
    }
};

// Refactoring the code to handlerFactory
// Delete a product by id
exports.deleteProduct = factory.deleteOne(Product);