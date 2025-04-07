import mongoose from "mongoose";
import {connectDB} from "@yashsingh2903/ecommerce-common";
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error("MONGO_URI is not defined in the environment variables");
}
connectDB(mongoUri);