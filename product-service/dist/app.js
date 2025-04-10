"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ecommerce_common_1 = require("@yashsingh2903/ecommerce-common");
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", product_routes_1.default);
app.use(ecommerce_common_1.errorHandler);
exports.default = app;
