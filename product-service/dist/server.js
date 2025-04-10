"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("tsconfig-paths/register");
require("./config/env");
const app_1 = __importDefault(require("./app"));
const ecommerce_common_1 = require("@yashsingh2903/ecommerce-common");
const env_1 = require("./config/env");
if (!env_1.MONGO_URI) {
    throw new Error("Mongo URI not defined in .env");
}
const start = async () => {
    try {
        await (0, ecommerce_common_1.connectDB)(env_1.MONGO_URI);
        app_1.default.listen(env_1.PORT, () => {
            console.log(`Product Service running on port ${env_1.PORT}`);
        });
    }
    catch (err) {
        console.error("Failed to start Product Service:", err);
    }
};
start();
