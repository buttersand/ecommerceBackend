import express from "express";
import productRoutes from "@/routes/product.routes";

const router = express.Router();

router.use("/products", productRoutes);

export default router;
