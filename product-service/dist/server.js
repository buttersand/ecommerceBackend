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
const { MONGO_URI, PORT } = env_1.envConfig;
if (!MONGO_URI) {
    throw new Error("Mongo URI not defined in .env");
}
const start = async () => {
    try {
        await (0, ecommerce_common_1.connectDB)(MONGO_URI);
        app_1.default.listen(PORT, () => {
            console.log(`Product Service running on port ${PORT}`);
        });
    }
    catch (err) {
        console.error("Failed to start Product Service:", err);
    }
};
start();
