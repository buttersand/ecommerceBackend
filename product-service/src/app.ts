import express from 'express';
import dotenv from 'dotenv';
import { errorHandler } from "@yashsingh2903/ecommerce-common"; // from your common package
import productRouter from './routes/product.routes';


dotenv.config();
const app=express();
app.use(express.json());
app.use("/api/products", productRouter);
app.use(errorHandler);


export default app;