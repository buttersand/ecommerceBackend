import express from "express";
import {
  createProduct,
  getAllProducts,
} from "@/controllers/product.controller";

const router = express.Router();

router.post("/", createProduct);
router.get("/products", getAllProducts);

export default router;
