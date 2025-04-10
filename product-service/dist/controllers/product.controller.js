"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.createProduct = void 0;
const product_model_1 = require("../models/product.model");
const ecommerce_common_1 = require("@yashsingh2903/ecommerce-common");
const createProduct = async (req, res, next) => {
    try {
        const { name, price, stock } = req.body;
        if (!name || !price || !stock) {
            const { statusCode, body } = (0, ecommerce_common_1.errorResponse)("Please provide name, price, and stock", ecommerce_common_1.StatusCodes.BAD_REQUEST);
            res.status(statusCode).json(body);
            return;
        }
        const product = new product_model_1.Product({ name, price, stock });
        await product.save();
        const { statusCode, body } = (0, ecommerce_common_1.successResponse)("Product created successfully", product, ecommerce_common_1.StatusCodes.CREATED);
        res.status(statusCode).json(body);
    }
    catch (error) {
        next(error);
    }
};
exports.createProduct = createProduct;
const getAllProducts = async (req, res, next) => {
    console.log(req);
    try {
        const products = await product_model_1.Product.find();
        const { statusCode, body } = (0, ecommerce_common_1.successResponse)("Products fetched successfully", products, ecommerce_common_1.StatusCodes.OK);
        res.status(statusCode).json(body);
    }
    catch (error) {
        next(error);
    }
};
exports.getAllProducts = getAllProducts;
