import express from "express";
import { errorHandler } from "@yashsingh2903/ecommerce-common";
import productRouter from "@/routes/product.routes";

const app = express();

app.use(express.json());
app.use("/product", productRouter);
app.use(errorHandler);

export default app;
