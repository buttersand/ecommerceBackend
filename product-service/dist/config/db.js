"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ecommerce_common_1 = require("@yashsingh2903/ecommerce-common");
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    throw new Error("MONGO_URI is not defined in the environment variables");
}
(0, ecommerce_common_1.connectDB)(mongoUri);
