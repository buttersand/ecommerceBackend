import express from "express";
import {
  createProduct,
  getAllProducts,
} from "@/controllers/product.controller";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);

export default router;
