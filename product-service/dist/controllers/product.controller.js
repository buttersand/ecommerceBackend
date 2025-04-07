"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.createProduct = void 0;
const product_model_1 = require("../models/product.model");
//function to create a new product
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, stock } = req.body;
        if (!name || !price || !stock) {
            res.status(400).json({ message: "Please provide all fields" });
            return;
        }
        const product = new product_model_1.Product({ name, price, stock });
        yield product.save();
        res.status(201).json({ message: "Product created successfully", product });
        return;
    }
    catch (err) {
        next(err);
    }
});
exports.createProduct = createProduct;
// function to get all products
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_model_1.Product.find(); //find all products
        res.status(200).json({ products }); //return all products
    }
    catch (error) {
        next(error);
    }
});
exports.getAllProducts = getAllProducts;
